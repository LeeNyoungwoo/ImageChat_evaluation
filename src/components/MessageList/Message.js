import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import './Message.css';

export default class Message extends Component {
    render() {
        const { type, text, img_list, score_list, top1_mode, top1_target } = this.props;

            return (
            <div>
                {
                    (() => {
                        if (type === true)
                            return  (
                                    <div>
                                        { (top1_mode === 2 && top1_target)
                                            ?   null
                                            :   <div className="messageSection messageSectionBot">
                                                    <span className="messageSectionBody">{text}</span>
                                                </div>
                                        }
                                        {img_list
                                            ?   <div className="messageSection_Img messageSectionBot">
                                                    { img_list.map(
                                                        (img, i) => (
                                                            <span key={i} className="messageSectionImg">
                                                                <Image style={{width: '10vh', height: 'auto'}} src={require(`../../store/modules/coco_ex/${img}`)}/>
                                                                <div style={{marginTop:'1.1vh', textAlign: 'center'}}>{Number(score_list[i]).toFixed(3)}</div>
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            :   null
                                        }
                                    </div>
                                    );
                        if (type === false)
                            return (
                                <div>
                                    { (top1_mode === 2 && top1_target)
                                            ?   null
                                            :   <div className="messageSection messageSectionUser">
                                                    <div className="messageSectionCenter">
                                                        <span className="messageSectionBody">{text}</span>
                                                    </div>
                                                </div>
                                    }
                                    {img_list
                                        ?   <div className="messageSection_Img messageSectionUser">
                                                { img_list.map(
                                                    (img, i) => (
                                                        <span key={i} className="messageSectionImg">
                                                            <Image style={{width: '10vh', height: 'auto'}} src={require(`../../store/modules/coco_ex/${img}`)}/>
                                                            <div style={{marginTop:'1.1vh', textAlign: 'center'}}>{Number(score_list[i]).toFixed(3)}</div>
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        :   null
                                    }
                                </div>
                                );
                    })()
                }
            </div>
        );
    }
}