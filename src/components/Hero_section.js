import React from 'react'

function Hero_section(props) {

  return (
    <div className='text-white mx-3 rounded-lg h-screen z-0'style={{ backgroundColor: '#263329'}}>
      <div className='flex justify-between mx-6 py-6'>
        <div>
          <p>Verse</p>
          <p style={{color:"#c0f70a",}}>By Islam786</p>
          <p>Surah An-Naas [114:1-6]</p>
        </div>
        <div style={{color: '#c5e3cd'}}  className='flex justify-center items-center '>
       <a href='/'> <i className={`text_hover_effect m-3 mx-6 fa-solid fa-2x fa-share-nodes`} ></i></a>
       <a href='/'><i className={`text_hover_effect fa-sharp fa-2x fa-solid fa-book-open `} ></i></a> 
        </div>
      </div>
      <div className='h-fit w-full' >
        <p className='mx-4 py-6' style={{direction:"rtl"}}>قُلْ أَعُوذُ بِرَبِّ النَّاسِ
مَلِكِ النَّاسِ
إِلَٰهِ النَّاسِ
مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
مِنَ الْجِنَّةِ وَالنَّاسِ
<br />  <br /><br />

کہو کہ میں لوگوں کے پروردگار کی پناہ مانگتا ہوں 
(یعنی) لوگوں کے حقیقی بادشاہ کی
 لوگوں کے معبود برحق کی<br />
(شیطان) وسوسہ انداز کی برائی سے جو (خدا کا نام سن کر)  پیچھے ہٹ جاتا ہے
جو لوگوں کے دلوں میں وسوسے <br />ڈالتا ہے
وہ جنّات میں سے (ہو) یا انسانوں میں سے

</p>

      </div>
    </div>
  )
}

export default Hero_section
