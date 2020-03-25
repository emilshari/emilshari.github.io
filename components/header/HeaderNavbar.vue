<template>
<div class="navbar">
    <div class="container">
        <div class="navbar_wrap">
                            <!-- /.navbar_wrap_after -->
                            <div class="navbar_wrap_main">
                            <!-- /.navbar_wrap_main -->
                            <div class="navbar_wrap_name">
                                <h1 class="navbar_wrap_name"> Emil Shari</h1>
                                <!-- /.navbar_wrap_title -->
                            </div>
                            <div class="navbar_wrap_job_title">
                                <h2 class="navbar_wrap_job">Junior Web-Developer</h2>
                                <!-- /.navbar_wrap_job -->
                                <!-- /.navbar_wrap_subtitle -->
                            </div>
                            <div class="navbar_wrap_description">
                                <p class="navbar_wrap_description">
                                        Junior Web Developer, which is engaging in front-end development. <br> Experienced with all stages of the development cycle for front-end layouts, adding plugins and enhancing site <br> modules performance. Wellversed in numerous programming languages, which is involving: <br> HTML5, CSS3, JS, jQuery, SCSS, SASS, Bootstrap 4, HTML5 Canvas, Gulp.js. <br> Strong background in project management and customer relations. 
                                </p>
                                <!-- /.navbar_wrap_description -->
                            </div>
                        </div>
                        <div class="navbar_wrap_photo">
                            <div class="navbar_wrap_photo_splend">
                                
                            </div>
                            <!-- /.navbar_wrap_photo_splend -->
                            <!-- /.navbar_wrap_photo -->
                        </div>
                            <!-- /.navbar_wrap_title -->
                        </div>
        <!-- /.navbar_wrap -->
    </div>
    <!-- /.container -->
</div>
<!-- /.navbar -->
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

body
    margin-top: 75px
    
::-webkit-scrollbar-button 
    background-repeat: no-repeat
    width: 6px
    height: 0px


::-webkit-scrollbar-track 
    background-color:#ecf0f1

::-webkit-scrollbar-thumb 
    background-color:#f1c40f
    background-position: center
    background-repeat: no-repeat


::-webkit-resizer
    background-repeat: no-repeat
    width: 7px
    height: 0px

::-webkit-scrollbar
    width: 5px

.navbar_wrap_after
    position: absolute
    content: ''
    transform: rotate(-360deg)
    border: 40px solid transparent
    border-top: 40px solid rgba(255, 255, 255, 0.1)
    border-right: 40px solid rgba(255, 255, 255, 0.1)
    right: 0
    top: 0

.navbar_wrap
    overflow: hidden
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 1)
    background: lighten(#2f3542, 0%)
    color: lighten(#ffffff, 80%)

.navbar
    position: relative
    z-index: 5 
    &_wrap
        overflow: hid
        padding-top: 30px
        display: flex
        flex-basis: 100% 
        flex-wrap: wrap
        justify-content: space-around
        align-items: center
    &_wrap_photo
        transition: 0.5s ease
        overflow: hidden
        margin-bottom: 20px
        background: url('~assets/img/photo_face.png') no-repeat center
        background-size: cover
        width: 195px
        height: 195px
        border: 5px solid #f1c40f
        border-radius: 50%
    &_wrap_photo_splend
        position: relative
        width: 190px 
        border-radius: 50%
        overflow: hidden
        height: 190px
    &_wrap_photo_splend_active
        transition: 0.5s ease
        transform-origin: top right
        transform: scale(0)
        opacity: 0
        visibility: hidden
    &_wrap_photo_splend::before 
        filter: blur(5px)
        opacity: 0.4
        transform: skewX(45deg)
        position: absolute 
        content: ''
        height: 100%
        width: 60px
        left: -160%
        background: #ecf0f1
        transition: 2s ease
    &_wrap_photo_splend:hover::before 
        transition: 0.5s ease
        left: 160%
    &_wrap_description
        line-height: 30px
        +thin
        padding-bottom: 20px
        font-size: 14px
        color: #ffffff
        letter-spacing: 
        font-size: 18px 
        margin: 0
        margin-top: 20px
    &_wrap_name
        font-size: 34px
        margin-bottom: 10px
        +ultralight
        text-transform: uppercase
        letter-spacing: 5px
    &_wrap_job_title
        transition: 0.5s
        z-index: 8
    &_wrap_job_title::before 
        width: 25% 
        height: 2px 
        background: #ffffff
        position: absolute 
        content: ''
        transform: translate(30%, 37px)
        opacity: 0.5

.navbar_wrap_job 
    transition: 0.5s
    z-index: 8
    font-size: 24px
    color: #f1c40f
    +regular
    text-transform: uppercase 
    letter-spacing: 2px



</style>