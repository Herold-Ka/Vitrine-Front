import {useState, useEffect} from 'react'
import './SecondCard.css'

const SecondCard = () => {
  
  const [secondCardImg, setSecondCardImg] = useState([''])
  useEffect(() => {
    request()
  }, [])


  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      alert('lol')
      console.log('lol')
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
    <div className='divSecondCard' onScroll={() => handleScroll()}>
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