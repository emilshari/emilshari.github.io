<template>
  <section class="personal" id="personal">
                    <div class="container">
                        <div class="personal_wrap">
                            <div class="personal_wrap_title_block">
                                <h2 class="personal_wrap_title">
                                    Personal data
                                </h2>
                            </div>
                                <div class="personal_wrap_title_under">
                                    <i class="fas fa-users fa-2x"></i>
                                </div>
                                <!-- /.personal_wrap_title_under -->
                                <nav class="personal_wrap_nav">
                                    <ul class="personal_wrap_ul">
                                        <li class="personal_wrap_li">Date of birth<br> <p class="personal_wrap_li_sub">- 15.08.2001 -</p>
                                        <!-- /.personal_wrap_li_sub -->
                                            </li>
                                        <!-- /.personal_wrap_li -->
                                        <li class="personal_wrap_li">Place of birth<br> <p class="personal_wrap_li_sub">- Tchaikovskiy, Russian Federation -</p>
                                        <!-- /.personal_wrap_li_sub -->
                                            </li>
                                        <!-- /.personal_wrap_li -->
                                        <li class="personal_wrap_li">Social Media<br> <div class="personal_wrap_li_medias">
                                            <nav class="personal_wrap_li_medias_nav">
                                                <ul class="personal_wrap_li_medias_ul">
                                                    <li class="personal_wrap_li_medias_li"><a href="" class=""> <!-- /. --><i class="fab fa-telegram fa-2x"></i></a><span class="personal_wrap_li_medias_li_span"></span> <!-- /.personal_wrap_li_medias_li_span --></li>
                                                    <!-- /.personal_wrap_li_medias_li -->
                                                    <li class="personal_wrap_li_medias_li"><a href="" class=""> <!-- /. --><i  class="fab fa-skype fa-2x"></i> </a><span class="personal_wrap_li_medias_li_span"></span> <!-- /.personal_wrap_li_medias_li_span --></li>
                                                    <!-- /.personal_wrap_li_medias_li -->
                                                    <li class="personal_wrap_li_medias_li"><a href="https://www.linkedin.com/in/emil-shari-476997197/" class=""> <!-- /. --><i class="fab fa-linkedin fa-2x"></i> </a><span class="personal_wrap_li_medias_li_span"></span> <!-- /.personal_wrap_li_medias_li_span --></li>
                                                    <!-- /.personal_wrap_li_medias_li -->
                                                </ul>
                                                <!-- /.personal_wrap_li_medias_ul -->
                                            </nav>
                                            <!-- /.personal_wrap_li_medias_nav -->
                                        </div>
                                        <!-- /.personal_wrap_li_sub -->
                                        </li>
                                        <!-- /.personal_wrap_li -->
                                    </ul>
                                    <!-- /.personal_wrap_li -->
                                </nav>
                                <!-- /.personal_wrap_nav -->
                                <!-- /.personal_wrap_title -->
                            <!-- /.personal_wrap_title -->
                        </div>
                        <!-- /.features_wrap -->
                    </div>
                    <!-- /.container -->
                </section>
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

.personal
    &_wrap 
        padding-top: 25px
        position: relative 
        background: rgb(236, 240, 241)
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 1)
    &_wrap_title
        padding-top: 25px
        border-top: 1px dashed rgba(127, 140, 141, 0.5)
        +ultralight 
        text-transform: uppercase 
        font-size: 32px 
        position: relative
        text-align: center
    &_wrap_title_under 
        margin-bottom: 25px 
        margin-top: 25px
        position: relative
        text-align: center
    &_wrap_li_sub
        padding: 0
        +thin
        letter-spacing: 1.5px
        position: relative
        padding: 0 
        font-size: 20px
        margin-top: 20px
    &_wrap_li
        margin-bottom: 20px
        letter-spacing: 1px 
        position: relative
        font-size: 28px 
        +light
        color: #0c0c0c
        opacity: 0.95
        letter-spacing: 1.5px 
        text-transform: uppercase
        margin: 0
        padding: 0
        list-style: none
        transition: 2s ease
    &_wrap_li:hover 
        transition: 0.5s ease
        color: rgb(142, 68, 173)

    &_wrap_li_sub::before 
        position: absolute 
        top: 0 
        left: 50% 
        transform: translate(-50%, -10px) 
        width: 7%
        height: 3px
        border-radius: 15px
        content: ''
        background: rgba(44, 62, 80, 0.3)
    &_wrap_li_medias
        margin-top: 25px
    &_wrap_ul 
        margin: 0
        padding: 0
        text-align: center
    &_wrap_li_medias_li
        padding: 0 
        margin-top: 25px
        list-style: none
    &_wrap_li_medias_li:nth-child(1)
        border-right: 1px dashed rgba(127, 140, 141, 0.5)
        padding: 0 150px
    &_wrap_li_medias_li:nth-child(2)
        padding: 0 150px
    &_wrap_li_medias_li:nth-child(3)
        padding: 0 150px
        border-left: 1px dashed rgba(127, 140, 141, 0.5)
    &_wrap_li_medias_ul
        background: rgb(52, 73, 94)
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1)
        display: flex 
        justify-content: space-around
        align-items: center 
        flex-wrap: wrap
        padding: 0 
        margin: 0
        padding-bottom: 25px

.fa-telegram:hover
    transition: 0.3s ease
    cursor: pointer
    color: rgb(41, 128, 185)

.fa-telegram, .fa-skype, .fa-linkedin 
    transition: 2s ease
    color: rgba(236, 240, 241, 0.8)

.fa-skype:hover
    transition: 0.3s ease
    cursor: pointer
    color: rgb(52, 152, 219)


.fa-linkedin:hover
    transition: 0.3s ease
    cursor: pointer
    color: rgb(236, 240, 241)

.fa-linkedin:active
    transform: scale(0.8)

.fa-skype:active 
    transform: scale(0.8)

.fa-telegram:active
    transform: scale(0.8)

@media (max-width: 1170px)
    .personal
        &_wrap_li_medias_li:nth-child(1)
            border-right: 1px dashed rgba(127, 140, 141, 0.5)
            padding: 0 75px
        &_wrap_li_medias_li:nth-child(2)
            padding: 0 75px
        &_wrap_li_medias_li:nth-child(3)
            padding: 0 75px
            border-left: 1px dashed rgba(127, 140, 141, 0.5)
    .container 
        max-width: 876px
    .navbar_wrap_description
        padding: 5px 20px
        margin-top: 10px
    .navbar_wrap_name
        text-align: center
    .navbar_wrap_job
        text-align: center
    .menu_navbar_wrap_links
        font-size: 24px
    .navbar_wrap_job_title::before 
        width: 25%
        height: 2px
        background: #ffffff
        position: absolute
        content: ''
        left: 50%
        transform: translate(-50%, 37px)
        opacity: 0.5
    .hero_wrap_xing
        padding: 0 35px
    .hero_wrap_geo
        padding: 0 20px
    .hero_wrap_telephone
        padding: 0 20px
    .hero_wrap_mail
        padding: 0 20px


@media (min-width: 576px) and (max-width: 876px) 
    .container 
        max-width: 676px

@media (min-width: 410px) and (max-width: 576px) 
    .container 
        max-width: 380px
    .personal
        &_wrap_li_medias_li:nth-child(1)
            border: none
        &_wrap_li_medias_li:nth-child(2)
            border: none
        &_wrap_li_medias_li:nth-child(3)
            border: none
    .navbar_wrap_description
        padding: 5px 20px
        margin-top: 10px
    .navbar_wrap_name
        text-align: center
    .navbar_wrap_job
        text-align: center
    .menu_navbar_wrap_links
        font-size: 18px 

@media (min-width: 380px) and (max-width: 410px)
    .container 
        max-width: 380px
    .navbar_wrap_description
        padding: 5px 20px
        margin-top: 10px
    .navbar_wrap_name
        text-align: center
    .navbar_wrap_job
        text-align: center
    .menu_navbar_wrap_links
        font-size: 16px
    .personal
        &_wrap_li_medias_li:nth-child(1)
            border: none
        &_wrap_li_medias_li:nth-child(2)
            border: none
        &_wrap_li_medias_li:nth-child(3)
            border: none
    

@media screen and (max-width: 380px)
    .container
        max-width: 340px
    .navbar_wrap_description
        padding: 5px 20px
        margin-top: 10px
    .navbar_wrap_name
        text-align: center
    .navbar_wrap_job
        text-align: center
    .menu_navbar_wrap_links
        font-size: 14px
    .personal
        &_wrap_li_medias_li:nth-child(1)
            border: none
        &_wrap_li_medias_li:nth-child(2)
            border: none
        &_wrap_li_medias_li:nth-child(3)
            border: none



@media screen and (max-width: 330px)   
    .container
        max-width: 300px
    .navbar_wrap_job_title::before
        transform: translate(-50%, 65px)
    .personal
        &_wrap_li_medias_li:nth-child(1)
            border: none
        &_wrap_li_medias_li:nth-child(2)
            border: none
        &_wrap_li_medias_li:nth-child(3)
            border: none
    .menu_navbar_wrap_links
        font-size: 10px


</style>