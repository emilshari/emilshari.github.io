<template>
   <section id="work" class="work">
                    <div class="container">
                        <div class="work_wrap">
                            <h2 class="work_wrap_experience"> Work Experience</h2>
                            <div class="star">
                                    <i class="fa fa-star fa-2x"></i>
                            </div>
                            <!-- /.star -->
                            <!-- /.work_wrap_experience -->
                            <div class="work_wrap_experience_occupation">
                                <h3 class="work_wrap_experience_occupation_title">Junior Web-Developer <br> UpWork </h3>
                                <div class="work_wrap_experience_occupation_logo"></div>
                                <!-- /.work_wrap_experience_occupation_logo -->
                                <p class="work_wrap_experience_chrono">
                                    - 08/2019 to present -
                                </p>
                                <!-- /.work_wrap_experience_chrono -->
                                <!-- /.work_wrap_experience_occupation_title -->
                                <nav class="work_wrap_experience_occupation_nav">
                                    <ul class="work_wrap_experience_occupation_ul">
                                        <li class="work_wrap_experience_occupation_li"><span class="work_wrap_experience_occupation_span">Collaborate with designers to create clean interfaces and simple, <br> intuitive interactions and experiences.</span> <!-- /.work_wrap_experience_occupation_span -->
                                             </li>
                                        <!-- /.work_wrap_experience_occupation_li -->
                                        <li class="work_wrap_experience_occupation_li"><span class="work_wrap_experience_occupation_span">Develop project concepts and maintain <br> optimal work-ability and work-flow. </span> <!-- /.work_wrap_experience_occupation_span --> 
                                            </li>
                                        <!-- /.work_wrap_experience_occupation_li -->
                                        <li class="work_wrap_experience_occupation_li"><span class="work_wrap_experience_occupation_span"> Complete detailed programming (clean code) <br> and development tasks <br> for front end websites.</span> <!-- /.work_wrap_experience_occupation_span -->
                                            </li>
                                        <!-- /.work_wrap_experience_occupation_li -->
                                        <li class="work_wrap_experience_occupation_li"><span class="work_wrap_experience_occupation_span">Carry out quality assurance tests to discover <br> errors and optimize usability.</span> <!-- /.work_wrap_experience_occupation_span -->
                                             </li>
                                        <!-- /.work_wrap_experience_occupation_li -->
                                        <li class="work_wrap_experience_occupation_li"><span class="work_wrap_experience_occupation_span">The concupiscence to solve the inaccuracies that <br> have occurred and the stationary approach to solving.</span> <!-- /.work_wrap_experience_occupation_span -->
                                             </li>
                                        <!-- /.work_wrap_experience_occupation_li -->
                                    </ul>
                                    <!-- /.work_wrap_experience_occupation_ul -->
                                </nav>
                                <!-- /.work_wrap_experience_occupation_nav -->
                            </div>
                            <!-- /.work_wrap_experience_occupation -->
                        </div>
                        <!-- /.work_wrap -->
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

.work
    &_wrap
        padding-bottom: 50px
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 1)
        border-bottom: 1px dashed rgba(127, 140, 141, 0.5)
        padding-top: 25px
        background: #ecf0f1
    &_wrap_experience_occupation_title
        color: #0c0c0c
        font-size: 24px
        +ultralight
        text-align: center
        line-height: 30px
    &_wrap_experience 
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
    &_wrap_experience:hover 
        transition: 0.5s ease
        color: #f1c40f
    &_wrap_experience_chrono
        animation: splend 5s linear infinite
        color: #0c0c0c
        text-align: center 
        +thin
        font-size: 24px 
        letter-spacing: 2px
        text-transform: uppercase
    &_wrap_experience_occupation_li
        +regular
        text-transform: uppercase
        letter-spacing: 2px
        padding-bottom: 20px 
        margin: 0 50px
        min-height: 50px
        color: #f1c40f
    &_wrap_experience_occupation_ul 
        margin-top: 30px
        display: grid 
        justify-content: center 
        align-items: center
        color: #0c0c0c
    &_wrap_experience_occupation_span
        font-size: 14px
        color: #0c0c0c
    &_wrap_experience_occupation_logo
        background: url('~assets/img/upwork.svg') no-repeat center
        background-size: cover 
        margin: 0 auto
        width: 256px 
        height: 76.5px
        transition: 2s ease

@keyframes splend 
    0%
        transform: translateY(0)
    50% 
        transform: translateY(5px)
    100% 
        transform: translateY(0)

</style>