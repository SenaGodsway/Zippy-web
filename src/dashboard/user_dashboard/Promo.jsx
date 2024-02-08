import '../css/promo.css'

function Discount() {
  return (
    <div className='promoCard'>
      <h3>Save up to 70%</h3>
      <p>Use code <strong>ZIPPY01</strong> and save up to <strong>70% </strong>cost</p>
      {}
      <button className='claim-btn'>Claim now</button>
    </div>
  )
}

export default Discount
