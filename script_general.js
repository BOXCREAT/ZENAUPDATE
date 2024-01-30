(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"borderRadius":0,"shadow":false,"gap":10,"definitions": [{"hfovMin":"150%","frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"url":"media/panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35_t.jpg","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35_t.jpg","partial":false,"vfov":180,"overlays":["this.overlay_5531A437_58A2_322A_41B7_DA3EA89E3E3D"],"label":trans('panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35.label'),"id":"panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35","hfovMax":130,"class":"Panorama","pitch":0,"adjacentPanoramas":[{"distance":4.16,"yaw":21.3,"select":"this.overlay_5531A437_58A2_322A_41B7_DA3EA89E3E3D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_5531A437_58A2_322A_41B7_DA3EA89E3E3D"},"panorama":"this.panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449","class":"AdjacentPanorama","backwardYaw":-6.68}],"hfov":360,"data":{"label":"FOYER"}},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449_camera","class":"PanoramaPlayListItem","media":"this.panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"borderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"playbackBarBorderRadius":0,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"playbackBarHeight":10,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","paddingRight":0,"progressBackgroundColorRatios":[0],"paddingLeft":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressOpacity":1,"subtitlesTextShadowVerticalLength":1,"progressRight":0,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipHorizontalAlign":"center","height":"100%","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadHeight":15,"progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":0,"subtitlesBorderColor":"#FFFFFF","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"borderSize":0,"toolTipPaddingRight":6,"minWidth":100,"progressHeight":10,"subtitlesOpacity":1,"subtitlesBorderSize":0,"progressBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesFontFamily":"Arial","toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowHorizontalLength":0,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"transitionDuration":500,"progressBorderRadius":0,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowHorizontalLength":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"class":"ViewerArea","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"shadow":false,"playbackBarRight":0},{"hfovMin":"150%","frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"url":"media/panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449_t.jpg","class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449_t.jpg","partial":false,"vfov":180,"overlays":["this.overlay_57102445_58A6_7269_41C9_61412FAD4DBF"],"label":trans('panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449.label'),"id":"panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449","hfovMax":130,"class":"Panorama","pitch":0,"adjacentPanoramas":[{"distance":3.68,"yaw":-6.68,"select":"this.overlay_57102445_58A6_7269_41C9_61412FAD4DBF.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_57102445_58A6_7269_41C9_61412FAD4DBF"},"panorama":"this.panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35","class":"AdjacentPanorama","backwardYaw":21.3}],"hfov":360,"data":{"label":"LIVING"}},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"initialSequence":"this.sequence_523CE854_58A3_D26F_41CF_C6BE06827EC6","id":"panorama_522414BA_58A3_D21B_41A7_8F20F0D1C449_camera"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"initialSequence":"this.sequence_523F484F_58A3_D279_41B0_CE3A75A776AA","id":"panorama_5351C09D_58A3_D21E_41C6_0FD0EEF33A35_camera"},{"surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"touchControlMode":"drag_rotation","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer"},{"areas":["this.HotspotPanoramaOverlayArea_55510469_58A2_3239_41CA_F90A98BDC384"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4994BBCE_58A6_367B_41AA_B970DAF0B469","distance":50,"yaw":21.3,"vfov":3.71,"data":{"label":"Arrow 02 Right-Up"},"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","roll":-12,"verticalAlign":"middle","hfov":5.39,"pitch":-22.2,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"Arrow 02 Right-Up"},"id":"overlay_5531A437_58A2_322A_41B7_DA3EA89E3E3D"},{"areas":["this.HotspotPanoramaOverlayArea_5713B44A_58A6_727B_41D4_896EB592F59D"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4994EBCE_58A6_367B_41C5_BC5B44773A05","distance":50,"yaw":-6.68,"vfov":4.07,"data":{"label":"Arrow 02 Left"},"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","roll":-28.51,"verticalAlign":"middle","hfov":7.39,"pitch":-24.76,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"Arrow 02 Left"},"id":"overlay_57102445_58A6_7269_41C9_61412FAD4DBF"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_523CE854_58A3_D26F_41CF_C6BE06827EC6"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_523F484F_58A3_D279_41B0_CE3A75A776AA"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_55510469_58A2_3239_41CA_F90A98BDC384"},{"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"levels":[{"height":348,"width":232,"url":"media/res_481F78B0_58A7_D227_41C0_D77B262D5B64_0.png","class":"ImageResourceLevel"}],"id":"AnimatedImageResource_4994BBCE_58A6_367B_41AA_B970DAF0B469"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5713B44A_58A6_727B_41D4_896EB592F59D"},{"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"levels":[{"height":384,"width":256,"url":"media/res_481E48B3_58A7_D229_41CD_81F44AD3C962_0.png","class":"ImageResourceLevel"}],"id":"AnimatedImageResource_4994EBCE_58A6_367B_41C5_BC5B44773A05"}],"defaultVRPointer":"laser","width":"100%","mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"translate":TDV.Tour.Script.translate,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getKey":TDV.Tour.Script.getKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"cloneCamera":TDV.Tour.Script.cloneCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"downloadFile":TDV.Tour.Script.downloadFile,"openLink":TDV.Tour.Script.openLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"clone":TDV.Tour.Script.clone,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"init":TDV.Tour.Script.init,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizFinish":TDV.Tour.Script.quizFinish,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initQuiz":TDV.Tour.Script.initQuiz,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"mixObject":TDV.Tour.Script.mixObject,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPixels":TDV.Tour.Script.getPixels,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getOverlays":TDV.Tour.Script.getOverlays,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowScore":TDV.Tour.Script.quizShowScore,"setValue":TDV.Tour.Script.setValue,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"unregisterKey":TDV.Tour.Script.unregisterKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"existsKey":TDV.Tour.Script.existsKey,"setMapLocation":TDV.Tour.Script.setMapLocation},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":0.75,"verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#FFFFFF"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.init()","minHeight":20,"class":"Player","backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0,"data":{"defaultLocale":"en","name":"Player590","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1},"locales":{"en":"locale/en.txt"}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Tue Jan 30 2024