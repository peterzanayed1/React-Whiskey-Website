import Background from '../assets/Whiskey.jpg'

function Home() {
  return (
    <div 
    style = {{ backgroundImage: `url(${Background})`}} 
    className ='flex flew-row justify-center mx-auto bg-cover bg-fixed'
    >
      <div className = 'flex place-items-center h-screen'>
      <h3 className ='p-5 bg-white bg-opacity-50 text-black rounded'>Welcome to the Whiskey Website</h3>
      </div>
      </div>
  )
}

export default Home