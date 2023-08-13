import Notfound from '../../assets/notfound.svg'
const Error = () => {
  return (
    <section className='flex flex-col h-screen gap-12 justify-center items-center'>
        <img src={Notfound} alt="Notfound" className='lg:w-2/4 w-full px-8'/>
        <h1 className='text-xl font-poppins'>Ops, Page Tidak Dapat Ditemukan!</h1>
    </section>
  )
}
export default Error