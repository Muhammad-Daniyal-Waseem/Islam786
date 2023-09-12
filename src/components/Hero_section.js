import React from 'react'

function Hero_section(props) {
  return (
    <div className='text-white mx-3 rounded-lg'style={{ backgroundColor: '#263329'}}>
      <div className='flex justify-between mx-6 py-6'>
        <div>
          <p>Verse</p>
          <p style={{color:"#c0f70a",}}>By GFS</p>
          <p>Surat-ul-Kaahaf[18-24]</p>
        </div>
        <div style={{color: '#c5e3cd'}}  className='flex justify-center items-center '>
       <a href='/'> <i className={`text_hover_effect m-3 mx-6 fa-solid fa-2x fa-share-nodes`} ></i></a>
       <a href='/'><i className={`text_hover_effect fa-sharp fa-2x fa-solid fa-book-open `} ></i></a> 
        </div>
      </div>
      <div className='h-fit w-full' >
        <p className='mx-4 py-6' style={{direction:"rtl"}}>إِذْ قَالَ يُوسُفُ لِأَبِيْهِ يَابَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبَا وَ الشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَجِدِينَ (2)<br></br><br></br>

جب کہ یوسف نے اپنے باپ سے ذکر کیا کہ ابا جان میں نے گیارہ ستاروں کو اور سورج چاند کو دیکھا کہ وہ سب مجھے سجدہ کر رہے ہیں</p>
      </div>
    </div>
  )
}

export default Hero_section
