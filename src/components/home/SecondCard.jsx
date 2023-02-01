import {useState, useEffect} from 'react'
import './SecondCard.css'

const SecondCard = () => {
  const [nb, setnb] = useState(15)
  const [secondCardImg, setSecondCardImg] = useState([''])
  useEffect(() => {
    request()
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    console.log('bir')
    fetch(`http://localhost:3000/article/nbArticlePageArticle/${nb}`,{method:'GET'})
        .then(res => res.json())
        .then(data => {
            setSecondCardImg(data.articles)
            console.log(nb)
        })
        .catch(err => console.log(err))
    return () => {
    };
  }, [nb,])

  const handleScroll = () => {
    
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    if (bottom) {
      console.log('lol')
      setnb(nb + 15)
      console.log(nb)
     }
  }
    const request = () =>{
      fetch('http://localhost:3000/article/nbArticlePageArticle/15',{method:'GET'})
        .then(res => res.json())
        .then(data => {
            setSecondCardImg(data.articles)
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='divSecondCard' onScroll={ handleScroll}>
      <div className="divSecondCardImage" >
        {
          secondCardImg.map((item, index) => (
            <img key={index} src={item.image}/>
          ))
        }
      </div>
    </div>
  )
}

export default SecondCard