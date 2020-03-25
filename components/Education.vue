<template>
  <section id = "education" class="education">
                    <div class="container">
                        <div class="education_wrap">
                            <div class="education_wrap_title">
                                <h2 class="education_wrap_title"> Education</h2>
                                <!-- /.education_wrap_title -->
                            </div>
                            <div class="education_wrap_content">
                                    <div class="education_wrap_graduation">
                                            <i class="fa fa-user-graduate fa-2x" aria-hidden="true"></i>
                                    </div>
                                <h4 class="education_wrap_content_subtitle">
                                    Bachelor of Science:
                                </h4>
                                <div class="education_wrap_content_build fa-3x">
                                <!-- /.education_wrap_content_build --><i class="fas fa-university"></i>
                            </div>
                                <!-- /.education_wrap_content_subtitle -->
                            <!-- /.education_wrap_title -->
                            <nav class="education_wrap_navbar">
                                <ul class="education_wrap_ul">
                                    <li class="education_wrap_li">
                                            <span class="education_wrap_li_span">
                                                    09.2017-05.2019 (Second General Education) <br>
                                                    <p class="education_wrap_li_subtitle">
                                                        Municipal Autonomous General Education №7 
                                                    </p>
                                                    <!-- /.education_wrap_li_subtitle -->
                                                    
                                            </span> <!-- /.education_wrap_li_span -->  
                                    </li>
                                    <br>
                                    <li class="education_wrap_li">
                                            <span class="education_wrap_li_span">
                                                    09.2008-05.2017 (Primary Education) <br>
                                                    <p class="education_wrap_li_subtitle">
                                                        Municipal Autonomous General Education №7 
                                                    </p>
                                                    <!-- /.education_wrap_li_subtitle -->
                                                    
                                            </span> <!-- /.education_wrap_li_span --> 
                                    </li>
                                    <!-- /.education_wrap_li -->
                                    <!-- /.education_wrap_li -->
                                </ul>
                                <!-- /.education_wrap_ul -->
                            </nav>
                        </div>
                            <!-- /.education_wrap_navbar -->
                        </div>
                        <!-- /.education_wrap -->
                    </div>
                    <!-- /.container -->
                </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" >
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

.education
    &_wrap
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 1)
        padding-bottom: 50px
        padding-top: 25px
        background: #ecf0f1
    &_wrap_title
        padding-top: 25px
        border-top: 1px dashed rgba(127, 140, 141, 0.5)
        color: #0c0c0c
        position: relative
        margin-bottom: 25px
        font-size: 32px
        +thin 
        text-transform: uppercase
        text-align: center
        transition: 2s ease
    &_wrap_title:hover 
        color: #f1c40f
        transition: 0.5s ease
    &_wrap_content_subtitle
        text-transform: uppercase
        color: #0c0c0c
        font-size: 24px
        +ultralight
        text-align: center
        line-height: 30px
    &_wrap_graduation
        margin-bottom: 35px
        text-align: center
        position: relative
        color: #f1c40f
    &_wrap_li_subtitle
        margin-top: 20px
        position: relative 
        color: #0c0c0c
    &_wrap_li_subtitle::before 
        top: 0 
        width: 15% 
        left: 50%
        transform: translate(-50%, -10px) 
        position: absolute
        background: rgba(44, 62, 80, 0.3)
        height: 2px 
        border-radius: 25px
        content: ''
    &_wrap_ul 
        display: flex
        justify-content: center
        flex-direction: column
        align-items: center
        margin-top: 25px
    &_wrap_li 
        color: #f1c40f
        margin: 0 50px
        min-height: 70px
        list-style: square
    &_wrap_li_span
        color: #0c0c0c
        +thin 
        letter-spacing: 1px
        text-transform: uppercase
        font-size: 18px
    &_wrap_content_build
        margin-top: 20px
        text-align: center
</style>