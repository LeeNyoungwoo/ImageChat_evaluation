import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import './Message.css';

export default class Message extends Component {
    render() {
        const { type, text, target_img, top1_mode, top1_target, max_score } = this.props;

        console.log(target_img)

            return (
            <div>
                {
                    (() => {
                        if (type === true)
                            return  (
                                    <div>
                                        { (top1_mode === 1 && top1_target)
                                            ?   null
                                            :   <div className="messageSection messageSectionBot">
                                                    <span className={top1_target ? "messageSectionTarget" : "messageSectionBody"}>{text}</span>
                                                </div>
                                        }
                                        {target_img
                                            ?   <div className="messageSection_Img messageSectionBot">
                                                    <span className="messageSectionImg">
                                                        <Image style={{width: '300px', height: 'auto'}} src={require(`../../store/modules/coco_ex/${target_img}`)}/>
                                                        {/* 이후 삭제해야 */}
                                                        <span>{max_score}</span>
                                                    </span>
                                                </div>
                                            :   null
                                        }
                                    </div>
                                    );
                        if (type === false)
                            return (
                                <div>
                                    { (top1_mode === 1 && top1_target)
                                            ?   null
                                            :   <div className="messageSection messageSectionUser">
                                                    <div className="messageSectionCenter">
                                                        <span className={top1_target ? "messageSectionTarget" : "messageSectionBody"}>{text}</span>
                                                    </div>
                                                </div>
                                    }
                                    {target_img
                                        ?   <div className="messageSection_Img messageSectionUser">
                                                <span className="messageSectionImg">
                                                    <Image style={{width: '15vw', height: 'auto'}} src={require(`../../store/modules/coco_ex/${target_img}`)}/>
                                                    {/* 이후 삭제해야 */}
                                                    <span>{max_score}</span>
                                                </span>
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