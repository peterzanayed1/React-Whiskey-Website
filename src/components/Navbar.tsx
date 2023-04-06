import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'


function navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
      }
    
      const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
      }
    
    const dropdown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }



  return (
    <nav className='flex items-center justify-between flex-wrap bg-red-900 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/' className='font-semibold text-xl tracking-tight'>Drinks</Link>
        </div>
        <div className="block">
            <button
            onClick={dropdown}
            className="flex items-center px-3 py-2 text-red-500 border rounded border-red-900 hover:text-white hover:border-white">
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
        { isVisible ? ( <div className='w-full block flex-grow items-center'>
            <div className='text-sm lg:flex-grow'>
                <Button className="p-3 m-5 bg-red-900 justify-center">
                    <div>
                       <Link to="/" onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4'>Home</Link> 
                    </div> 

                </Button>
                <Button className="p-3 m-5 bg-red-900 justify-center">
                    <div>
                       <Link to="/About" onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4'>about</Link> 
                    </div> 

                </Button>
                <Button className="p-3 m-5 bg-red-900 justify-center">
                    <div>
                       <Link to="/contact" onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4'>Contact</Link> 
                    </div> 

                </Button>
                <Button className="p-3 m-5 bg-red-900 justify-center">
                    <div>
                       <Link to="/Dashboard" onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4'>Dashboard</Link> 
                    </div> 

                </Button>
                {
                        !auth.currentUser ?

                        <Button className='p-3 m-5 bg-red-900 justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick()}} className="flex place-items-center mt-4
                                 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                    Login
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-3 m-5 bg-red-900 justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signOutOnClick()}} className="flex place-items-center mt-4
                                 lg:inline-block lg:mt-0 text-purple-200 hover:text-white">
                                    Sign Out
                                </Link>
                            </div>
                        </Button>
            }

            </div>
        </div> ) : (<></>)}
    </nav>
  )
}

export default navbar