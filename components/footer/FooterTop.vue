<template>
  <div class="footer-top">
      <div class="container">
                   <div class="footer_wrap">
                    <div class="footer_wrap_title">
                        <i class="fab fa-battle-net fa-2x"></i>
                    </div>
                    <div class="footer_wrap_subtitle">
                        <p class="footer_wrap_subtitle_p">
                            My Own Website
                        </p> <!-- /.footer_wrap_subtitle_span -->
                        <div class="footer_wrap_site">
                        <!-- /.footer_wrap_site --><a href="https://konfainment.github.io/" class="footer_wrap_site_link">- Click on me -</a>
                        <!-- /.footer_wrap_site -->
                    </div>
                </div>
                    <!-- /.fotter_wrap_subtitle -->
                    <!-- /.footer_wrap_title -->
                   </div>
                   <nav class="personal_wrap_li_medias_navbar">
                    <ul id = "footer_navbar" class="personal_wrap_li_medias_ul">
                        <li class="personal_wrap_li_medias_li"><a href="" class=""> <!-- /. --><i class="fab fa-telegram fa-2x"></i></a><span class="personal_wrap_li_medias_li_span"></span> <!-- /.personal_wrap_li_medias_li_span --></li>
                        <!-- /.personal_wrap_li_medias_li -->
                        <li class="personal_wrap_li_medias_li"><a href="" class=""> <!-- /. --><i  class="fab fa-skype fa-2x"></i> </a><span class="personal_wrap_li_medias_li_span"></span> <!-- /.personal_wrap_li_medias_li_span --></li>
                        <!-- /.personal_wrap_li_medias_li -->
                        <li class="personal_wrap_li_medias_li"><a href="https://www.linkedin.com/in/emil-shari-476997197/" class=""> <!-- /. --><i class="fab fa-linkedin fa-2x"></i> </a><span class="personal_wrap_li_medias_li_span"></span> <!-- /.personal_wrap_li_medias_li_span --></li>
                        <!-- /.personal_wrap_li_medias_li -->
                    </ul>
                    <!-- /.personal_wrap_li_medias_ul -->
                </nav>
                <div class="footer_footer">
                    <h5 class="footer_footer_name">
                        &copy Emil Shari, 2020
                    </h5>
                    <!-- /.footer_footer_name -->
                </div>
                <!-- /.footer_footer -->
                   <!-- /.footer_wrap -->
               </div>
               <!-- /.container -->
  </div>
  <!-- /.footer-top -->
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@mixin ultralight 
    font-family: 'San Francisco Pro Display Ultra Light'


@mixin regular 
    font-family: 'San Francisco Pro Display Regular'


@mixin light 
    font-family: 'San Francisco Pro Display Light'


@mixin heavy 
    font-family: 'San Francisco Pro Display Heavy'


@mixin thin 
    font-family: 'San Francisco Pro Display Thin'

.footer
    &_wrap
        background: rgba(39, 174, 96, 0.5)
        z-index: 999
        position: relative
    &_wrap_title 
        text-align: center
        position: relative 
        padding-top: 25px
    &_wrap_subtitle
        border-bottom: 1px dashed rgba(127, 140, 141, 0.5)
        position: relative
        padding: 0
        text-align: center
    &_wrap_subtitle_p
        position: relative
        text-transform: uppercase 
        font-size: 24px 
        +ultralight 
        padding: 0
        color: rgb(236, 240, 241)
        letter-spacing: 1px 
        margin-top: 25px
    &_wrap_title::before 
        height: 2px 
        width: 50px 
        position: absolute 
        top: 70%
        transform: translate(-55px, -50%)
        content: ''
        background: rgba(236, 240, 241, 0.8)
    &_wrap_title::after 
        height: 2px 
        width: 50px 
        position: absolute 
        top: 70%
        //transform-origin: center left
        transform: translate(5px, -50%)
        content: ''
        background: rgba(236, 240, 241, 0.8)
    &_wrap_site
        animation: bounce 2s cubic-bezier(0.30, 2.40, 0.85, 2.50) infinite
    &_wrap_site_link
        background: rgba(44, 62, 80, 0.8)
        border-radius: 20px 
        +ultralight 
        text-transform: uppercase 
        font-size: 24px
        letter-spacing: 1px 
        color: rgb(236, 240, 241)
        text-decoration: none
        padding: 0 10px
    &_footer 
        background: rgb(44, 62, 80)
        text-align: center 
        text-transform: uppercase 
        font-size: 16px
        color: rgb(236, 240, 241) 
        +thin
        padding: 10px 0
        letter-spacing: 1.5px

#footer_navbar
    background: rgba(39, 174, 96, 0.5)
    box-shadow: none
    border-bottom: 1px dashed rgba(127, 140, 141, 0.5) 

@keyframes bounce 
    from, to
        transform: translateY(-2px)
    80%
        transform: translateY(-5px)
    


</style>