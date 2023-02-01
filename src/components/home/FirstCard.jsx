import {useState, useEffect} from 'react'
import './FirstCard.css'


const FirstCard = () => {
  
  const [firstCardImg, setFirstCardImg] = useState([''])
  useEffect(() => {
    request()
  }, [])
    const request = () =>{
      fetch('http://localhost:3000/article/nbArticlePageArticle/15',{method:'GET'})
        .then(res => res.json())
        .then(data => {
            setFirstCardImg(data.articles)
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='divFirstCard'>
      <div className="divFirstCardImage">
      {
          firstCardImg.map((item, index) => (
            <img key={index} src={item.image}/>
          ))
        }
      </div>
    </div>
  )
}

export default FirstCard