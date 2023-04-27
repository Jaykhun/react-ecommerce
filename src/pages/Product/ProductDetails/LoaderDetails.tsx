import Loader from 'react-loading-skeleton'

const LoaderDetails = () => {
  return (
    <div className='details-loader'>
      <div className="details-loader__name">
        <Loader width={300} height={25} borderRadius={6} />
      </div>

      <div className="details-loader__body">
        <div className="details-loader__info">
          <div className="details-loader__control">
            <Loader width={500} height={200} borderRadius={6} />
          </div>

          <div className="details-loader__desc">
            <Loader width={400} height={100} borderRadius={6} />
          </div>
        </div>


        <div className="details-loader__img">
          <Loader width={300} height={350} borderRadius={6} />
        </div>
      </div>

      <div className="details-loader__footer">
        <Loader width={980} height={50} borderRadius={6} />
      </div>
    </div>
  )
}

export default LoaderDetails