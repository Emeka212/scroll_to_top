/*================================================
    CODES BEGINS HERE
================================================*/
STT_MC_STEPHEN = (icon = "")=> {
    //================================
    icon != ("") ? icon : icon='<i class="fas fa-arrow-up"></i>';
    //=====================================
    let html_for_scroll_btn = `
        <div class="scroll_to_top_by_mc_stephen" title='Scroll Back to Top'>
            ${icon}
        </div>
    `;
    //======================================
    const body = document.querySelector('body').innerHTML += html_for_scroll_btn;
    //======================================
    const scroll_to_top = document.querySelector('.scroll_to_top_by_mc_stephen');
    scroll_to_top.onclick = ()=>{
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    //======================================
    window.onscroll = function(){
        scroll_top();
    };
    function scroll_top(){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            scroll_to_top.style.transform = "scale(1.0)";
        }
        else{
            scroll_to_top.style.transform = "scale(0)";
        }
    }
    //====================================
}
STT_MC_STEPHEN();