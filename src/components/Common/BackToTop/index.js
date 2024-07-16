import './styles.css'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const BackToTop = () => {

    let mybutton = document.getElementById("top-btn");

        window.onscroll = function () {
        scrollFunction();
      };
    
      function scrollFunction() {
        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          mybutton.style.display = "flex";
        } else {
          mybutton.style.display = "none";
        }
      }

      function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

  return (
    <div className='back-to-top-btn' id='top-btn' onClick={()=>topFunction()}>
        <ArrowUpwardRoundedIcon styles={{color:"var(--blue)"}}/>
    </div>
  )
}

export default BackToTop