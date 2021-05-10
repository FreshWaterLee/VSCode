import React, { useEffect, useRef, useState } from 'react'; 
import styled from 'styled-components';
import oc from 'open-color';

const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.teal[7]};
    font-family: 'Rajdhani';
`;

// export function useLazyImageObserver({src}){
//     const [imageSrc, setImageSrc] = useState(null);
//     const imageRef = useRef(null);
//     useEffect(()=>{
//         let observer;

//         if(imageRef && !imageSrc){
//             observer = new IntersectionObserver(
//                 ([entry])=>{
//                     if(entry.isIntersecting){
//                         setImageSrc(src);
//                         observer.unobserve(imageRef.current);
//                     }
//                 },{threshold : [0.25]}
//             );
//             observer.observe(imageRef.current);
//         }
//         return () =>{
//             observer && observer.disconnect(imageRef);
//         };
//     }, [imageRef,imageSrc,src]);
//     return {imageSrc,imageRef};
// }

// const LazyImage = React.memo(({className, src, alt})=>{
//     const {imageSrc,imageRef} = useLazyImageObserver({src});

//     return(
//         <Image className = {className} ref = {imageRef} src = {imageSrc} alt = {alt}/>
//     );
// });

const options = {
    root: null,
    // 타겟 이미지 접근 전 이미지를 불러오기 위해 rootMargin을 설정했습니다.
    rootMargin: '0px 0px 30px 0px',
    threshold: 0
  }

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 관찰 대상이 viewport 안에 들어온 경우 image 로드
      if (entry.isIntersecting) {
        // data-src 정보를 타켓의 src 속성에 설정
        entry.target.src = entry.target.dataset.src;
        // 이미지를 불러왔다면 타켓 엘리먼트에 대한 관찰을 멈춘다.
        observer.unobserve(entry.target);
      }
    })
  }, options)

function MainPage(){
    return (
        <>
        <div style ={{margin: '100px'}}></div>
        <div className='main'>
            <Logo>메인페이지 구성</Logo>
        </div>
        </>
    );
}
export default MainPage;