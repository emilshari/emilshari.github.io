<template>
     <section id = "interests" class="interests">
                    <div class="container">
                        <div class="interests_wrap">
                                <div class="interests_wrap_title">
                                    <h2 class="interests_wrap_title">
                                        Interests
                                    </h2>
                                    <!-- /.interests_wrap_title_logo -->
                                </div>
                                <div class="interests_wrap_img_between">
                                        <i class="fab fa-d-and-d fa-2x"></i>
                                </div>
                                <nav class="interests_wrap_content_nav">
                                    <ul class="interests_wrap_content_ul">
                                            <div class="interests_wrap_content_first">
                                            <!-- /.interests_wrap_content_first -->
                                        <li class="interests_wrap_content_li"><div class="space_shuttle"><i class="fas fa-space-shuttle fa-3x"></i>
                                        <!-- /.space_shuttle --> <p class="interests_wrap_content_p p1">
                                                Celestial<br> Mechanic
                                        </p>
                                    </div>
                                        <!-- /.interests_wrap_content_p --> 
                                           </li>
                                        <!-- /.interests_wrap_content_li -->
                                        <li class="interests_wrap_content_li"><div class="calculator">
                                        <!-- /.calculator --><i class="fas fa-calculator fa-3x"></i><p class="interests_wrap_content_p p2">
                                                Math <br> Calculation
                                        </p>
                                    </div> 
                                        <!-- /.interests_wrap_content_p --> 
                                        </li>
                                        <!-- /.interests_wrap_content_li -->
                                    </div>
                                    <div class="interests_wrap_content_second">
                                    <!-- /.interests_wrap_content_second -->
                                        <li class="interests_wrap_content_li"><div class="code">
                                        <!-- /.code --><i class="fas fa-code fa-3x"></i> <p class="interests_wrap_content_p p3">
                                                Coding <br>
                                               Programming
                                        </p>
                                    </div>
                                        <!-- /.interests_wrap_content_p --> 
                                            </li>
                                        <!-- /.interests_wrap_content_li -->
                                        <li class="interests_wrap_content_li"><div class="cogs">
                                        <!-- /.cogs --><i class="fas fa-cogs fa-3x"></i><p class="interests_wrap_content_p p4">
                                                Self <br> Development
                                        </p>
                                    </div>
                                        <!-- /.interests_wrap_content_p --> 
                                            </li>
                                    </div>
                                        <!-- /.interests_wrap_content_li -->
                                    </ul>
                                    <!-- /.interests_wrap_content_ul -->
                                </nav>
                                <!-- /.interests_wrap_content_nav -->
                                <!-- /.interests_wrap_img_between -->
                                <!-- /.interests_wrap_title -->

                        </div>
                        <!-- /.interests_wrap -->
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

.interests
    &_wrap
        background: #ecf0f1
        padding-top: 25px
        padding-bottom: 25px
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 1)
    &_wrap_title
        text-align: center
        padding-top: 25px 
        border-top: 1px dashed rgba(127, 140, 141, 0.5)
        +ultralight 
        font-size: 32px 
        text-transform: uppercase 
        letter-spacing: 1px
        transition: 1s ease
    &_wrap_title:hover 
        color: #e74c3c
        transition: 0.5s ease
    &_wrap_img_between
        position: relative
        margin-top: 25px
        margin-bottom: 25px
        text-align: center
    &_wrap_content_li
        margin: 0 auto
        width: 200px
        display: flex
        flex-direction: column
        list-style: none 
    &_wrap_content_navbar
        border-bottom: 1px dashed rgba(127, 140, 141, 0.5)
        //margin-left: -50px
        display: flex
        justify-content: center
        align-content: center
    &_wrap_content_first
        display: flex
        flex-wrap: wrap
        justify-content: space-between
    &_wrap_content_second 
        display: flex
        flex-wrap: wrap
        justify-content: space-between
    &_wrap_content_p
        transition: 2s ease
        text-transform: uppercase 
        +ultralight 
        font-size: 24px 
        letter-spacing: 1px

.space_shuttle
    text-align: center

.cogs 
    text-align: center 

.code 
    text-align: center 

.calculator 
    text-align: center
</style>