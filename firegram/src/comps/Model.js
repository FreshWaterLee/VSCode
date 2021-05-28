import React from 'react'
import {motion} from 'framer-motion'

const Model=({selectedImg, setSelectedImg})=>{
    const handleClick=(e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
  return(
    <motion.div className = 'backdrop' onClick={handleClick}
        initial={{opacity:0}} // 천천히 나타나는 애니메이션을 위해 초반 투명도
        animate={{opacity:1}} // 애니메이션 투명도 설정
    >
      <motion.img className = 'backdrop-img' src={selectedImg} alt = "enlarged pic"
        initial={{y:"-100vh" }} // 시작 위치
        animate = {{y:0}} //애니메이션의 결과 위치
      />
    </motion.div>
  )
}

export default Model;