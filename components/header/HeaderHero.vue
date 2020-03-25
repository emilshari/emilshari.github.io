<template>
   <div class="hero">
                    <div class="container">
                          
                        <div class="hero_wrap">
                            <div class="hero_wrap_mail">
                                    <i class="fas fa-envelope"></i>
                                    <span class="hero_wrap_mail_title"> emil.shari87@gmail.com </span> 
                                    <!-- /.hero_wrap_mail_title -->
                            </div>
                            <!-- /.hero_wrap_mail -->
                            <div class="hero_wrap_telephone">
                                    <i class="fas fa-mobile-alt"></i>
                                    <span class="hero_wrap_telephone_title">+7 996 575 10 98</span> 
                                    <!-- /.hero_wrap_telephone_title -->
                            </div>
                            <!-- /.hero_wrap_telephone -->
                            <div class="hero_wrap_geo">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <a class="span hero_wrap_geo_title"> Naberezhnye Chelny, Russia</a> 
                                    <!-- /.span hero_wrap_geo_title -->
                            </div>
                            <!-- /.hero_wrap_geo -->
                            <div class="hero_wrap_xing">
                                    <i class="fab fa-xing"></i>
                                    <a href = "https://www.xing.com/profile/Emil_Shari/cv" rel="nofollow" class="hero_wrap_xing_title">Emil Shari</a> 
                                    <!-- /.hero_wrap_xing_title -->
                            </div>
                            <!-- /.hero_wrap_xing -->
                        </div>
                        <!-- /.hero_wrap -->
                    </div>
                    <!-- /.container -->
                </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
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


.hero
    z-index: 3
    &_wrap
        padding-top: 15px
        background-color: #0c0c0c
        display: flex
        flex-wrap: wrap
        flex-basis: 100%
        align-items: center
        justify-content: space-around
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 1)
    &_wrap_mail
        margin-bottom: 15px
    &_wrap_telephone
        margin-bottom: 15px 
    &_wrap_geo 
        margin-bottom: 15px
    &_wrap_xing 
        margin-bottom: 15px
    &_wrap_mail_title
        +thin
        letter-spacing: 2px
        transition: .5s ease
        position: relative
        color: #ffffff
        margin-left: 10px
    &_wrap_mail_title:hover 
        transition: .5s ease
        color: #f1c40f
    &_wrap_telephone_title:hover 
        transition: .5s ease
        color: #f1c40f
    &_wrap_xing_title:hover 
        transition: .5s ease
        color: #f1c40f
    &_wrap_geo_title:hover 
        transition: .5s ease
        color: #f1c40f
    &_wrap_mail_title::before 
        border-radius: 10px
        position: absolute
        content: ''
        width: 100% 
        height: 1px 
        background: #f1c40f
        bottom: 0
        transform: translateY(3px) scale(0)
        transition: .5s ease
    &_wrap_mail_title:hover::before 
        transition: .5s ease
        transform: translateY(3px) scale(1) 
    &_wrap_telephone_title
        +thin
        letter-spacing: 2px
        transition: .5s ease
        position: relative
        color: #ffffff
        margin-left: 10px
    &_wrap_geo_title
        +thin
        letter-spacing: 2px
        transition: .5s ease
        position: relative
        color: #ffffff
        margin-left: 10px
    &_wrap_xing_title
        +thin
        letter-spacing: 2px
        transition: .5s ease
        position: relative
        color: #ffffff
        margin-left: 10px
        text-decoration: none
    &_wrap_telephone_title::before 
        border-radius: 10px
        position: absolute
        content: ''
        width: 100% 
        height: 1px 
        background: #f1c40f
        bottom: 0
        transform: translateY(3px) scale(0)
        transition: .5s ease
    &_wrap_telephone_title:hover::before 
        transition: .5s ease
        transform: translateY(3px) scale(1) 
    &_wrap_geo_title::before 
        border-radius: 10px
        position: absolute
        content: ''
        width: 100% 
        height: 1px 
        background: #f1c40f
        bottom: 0
        transform: translateY(3px) scale(0)
        transition: .5s ease
    &_wrap_geo_title:hover::before 
        transition: .5s ease
        transform: translateY(3px) scale(1)
    &_wrap_xing_title::before 
        border-radius: 10px
        position: absolute
        content: ''
        width: 100% 
        height: 1px 
        background: #f1c40f
        bottom: 0
        transform: translateY(3px) scale(0)
        transition: .5s ease
    &_wrap_xing_title:hover::before 
        transition: .5s ease
        transform: translateY(3px) scale(1)  
        





    

</style>