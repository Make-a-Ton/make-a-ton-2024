import React, {Fragment, useEffect} from 'react';
import {TweenMax, Quart} from 'gsap';
import Image from 'next/image';
import $ from 'jquery';

const Countdown = () => {
    useEffect(() => {
        const Countdown = {
            $el: $('.countdown'),
            countdown_interval: null,
            total_seconds: 0,

            init: function () {
                this.$ = {
                    days: this.$el.find('.bloc-time.days .figure'),
                    hours: this.$el.find('.bloc-time.hours .figure'),
                    minutes: this.$el.find('.bloc-time.min .figure'),
                    seconds: this.$el.find('.bloc-time.sec .figure'),
                };

                // Init countdown values
                this.values = {
                    days: this.$.days.parent().attr('data-init-value'),
                    hours: this.$.hours.parent().attr('data-init-value'),
                    minutes: this.$.minutes.parent().attr('data-init-value'),
                    seconds: this.$.seconds.parent().attr('data-init-value'),
                };

                this.total_seconds =
                    this.values.days * 24 * 60 * 60 +
                    this.values.hours * 60 * 60 +
                    this.values.minutes * 60 +
                    this.values.seconds;

                this.count();
            },

            count: function () {
                const that = this;

                this.countdown_interval = setInterval(function () {
                    if (that.total_seconds > 0) {
                        --that.values.seconds;

                        if (that.values.minutes >= 0 && that.values.seconds < 0) {
                            that.values.seconds = 59;
                            --that.values.minutes;
                        }

                        if (that.values.hours >= 0 && that.values.minutes < 0) {
                            that.values.minutes = 59;
                            --that.values.hours;
                        }

                        if (that.values.days >= 0 && that.values.hours < 0) {
                            that.values.hours = 23;
                            --that.values.days;
                        }

                        // Update DOM values
                        // Days
                        that.checkHour(that.values.days, that.$.days.eq(0), that.$.days.eq(1));

                        // Hours
                        that.checkHour(that.values.hours, that.$.hours.eq(0), that.$.hours.eq(1));

                        // Minutes
                        that.checkHour(that.values.minutes, that.$.minutes.eq(0), that.$.minutes.eq(1));

                        // Seconds
                        that.checkHour(that.values.seconds, that.$.seconds.eq(0), that.$.seconds.eq(1));

                        --that.total_seconds;
                    } else {
                        clearInterval(that.countdown_interval);
                    }
                }, 1000);
            },

            animateFigure: function ($el, value) {
                const that = this;
                const $top = $el.find('.top');
                const $bottom = $el.find('.bottom');
                const $back_top = $el.find('.top-back');
                const $back_bottom = $el.find('.bottom-back');

                // Before we begin, change the back value
                $back_top.find('span').html(value);

                // Also change the back bottom value
                $back_bottom.find('span').html(value);

                // Then animate
                TweenMax.to($top, 0.8, {
                    rotationX: '-180deg',
                    transformPerspective: 300,
                    ease: Quart.easeOut,
                    onComplete: function () {
                        $top.html(value);
                        $bottom.html(value);
                        TweenMax.set($top, {rotationX: 0});
                    },
                });

                TweenMax.to($back_top, 0.8, {
                    rotationX: 0,
                    transformPerspective: 300,
                    ease: Quart.easeOut,
                    clearProps: 'all',
                });
            },

            checkHour: function (value, $el_1, $el_2) {
                const val_1 = value.toString().charAt(0);
                const val_2 = value.toString().charAt(1);
                const fig_1_value = $el_1.find('.top').html();
                const fig_2_value = $el_2.find('.top').html();

                if (value >= 10) {
                    // Animate only if the figure has changed
                    if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
                    if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
                } else {
                    // If we are under 10, replace first figure with 0
                    if (fig_1_value !== '0') this.animateFigure($el_1, '0');
                    if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
                }
            },
        };

        Countdown.init();
    }, []);

    return (
        <Fragment>
            <div className="flex sm:flex-row  flex-col items-center w-full ">
                <div className="flex countdown_container w-1/2 bg-white">
                    <div className="wrap">
                        <div className="countdown">
                            <div className="bloc-time days" data-init-value="5">
                                <span className="count-title">Days</span>
                                <div className="figure days days-1">
                                    <span className="top">0</span>
                                    <span className="top-back">
                                    <span>0</span>
                                  </span>
                                    <span className="bottom">0</span>
                                    <span className="bottom-back">
                                    <span>0</span>
                                  </span>
                                </div>

                                <div className="figure days days-2">
                                    <span className="top">0</span>
                                    <span className="top-back">
                                    <span>0</span>
                                  </span>
                                    <span className="bottom">0</span>
                                    <span className="bottom-back">
                                    <span>0</span>
                                  </span>
                                </div>
                            </div>

                            <div className="bloc-time hours" data-init-value="24">
                                <span className="count-title">Hours</span>
                                <div className="figure hours hours-1">
                                    <span className="top">0</span>
                                    <span className="top-back">
                    <span>0</span>
                  </span>
                                    <span className="bottom">0</span>
                                    <span className="bottom-back">
                    <span>0</span>
                  </span>
                                </div>

                                <div className="figure hours hours-2">
                                    <span className="top">0</span>
                                    <span className="top-back">
                    <span>0</span>
                  </span>
                                    <span className="bottom">0</span>
                                    <span className="bottom-back">
                    <span>0</span>
                  </span>
                                </div>
                            </div>

                            <div className="bloc-time min" data-init-value="0">
                                <span className="count-title">Minutes</span>
                                <div className="figure min min-1">
                                    <span className="top">0</span>
                                    <span className="top-back">
                    <span>0</span>
                  </span>
                                    <span className="bottom">0</span>
                                    <span className="bottom-back">
                    <span>0</span>
                  </span>
                                </div>

                                <div className="figure min min-2">
                                    <span className="top">0</span>
                                    <span className="top-back">
                    <span>0</span>
                  </span>
                                    <span className="bottom">0</span>
                                    <span className="bottom-back">
                    <span>0</span>
                  </span>
                                </div>
                            </div>

                            <div className="bloc-time sec" data-init-value="0">
                                <span className="count-title">Seconds</span>

                                <div className="figure sec sec-1">
                                    <span className="top">0</span>
                                    <span className="top-back">
                    <span>0</span>
                  </span>
                                    <span className="bottom">0</span>
                                    <span className="bottom-back">
                    <span>0</span>
                  </span>
                                </div>

                                <div className="figure sec sec-2">
                                    <span className="top">0</span>
                                    <span className="top-back">
                    <span>0</span>
                  </span>
                                    <span className="bottom">0</span>
                                    <span className="bottom-back">
                    <span>0</span>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex  items-center justify-evenly w-1/2">
                    <p className="text-white font-clash-bold text-3xl">Event Countdown</p>
                    <button
                        className="rounded-full bg-white border-2 border-gray-500 px-2 py-1 cursor-pointer ease-in-out active:scale-90">
                        <Image
                            src={'/assets/down.svg'}
                            alt={'down'}
                            width={20}
                            height={20}
                        />
                    </button>

                </div>
            </div>
        </Fragment>
    );
};

export default Countdown;
