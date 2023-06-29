import {ColorRing} from "react-loader-spinner"

const Spinner = () => {
  return (
    <div className="container px-5 flex flex-col gap-16 justify-center items-center mt-24">
        <p className="font-bold font-Josefin text-2xl">Loading data...</p>
      <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
/>
    </div>
  )
}

export default Spinner
