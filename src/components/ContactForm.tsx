import Input from "./Input"
import { useForm } from 'react-hook-form'
import {server_calls} from "../api/server"
import {useDispatch, useStore} from 'react-redux'
import { choosebrand,choosetype,chooseprice,chooserating } from "../redux/slices/RootSlice"

interface ContactFormProps{
    id?: string

}

const contactform = (props:ContactFormProps) => {
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any,event: any) => {
        console.log(`ID: ${props.id}`);
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`updated: ${data} ${props.id}`)
            setTimeout(() => {window.location.reload()},100000);
            event.target.reset()
        } else{
            dispatch(choosebrand(data.brand))
            dispatch(choosetype(data.type))
            dispatch(chooseprice(data.price))
            dispatch(chooserating(data.rating))

            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 100000)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="brand">brand</label>
                <Input {...register} name ='brand' placeholder='brand'/>
                {/* add input component here*/}
            </div>
            <div>
                <label htmlFor="type">type</label>
                <Input {...register} name ='type' placeholder='type'/>
                {/* add input component here*/}
            </div>
            <div>
                <label htmlFor="Price">price</label>
                <Input {...register} name ='Price' placeholder='price'/>
                {/* add input component here*/}
            </div>
            <div>
                <label htmlFor="rating">rating</label>
                <Input {...register} name ='rating' placeholder='rating'/>
                {/* add input component here*/}
            </div>
            <div className="flex p-1">
                <button
                className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default contactform