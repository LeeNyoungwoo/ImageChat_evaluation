import React, { Component } from 'react';
import Message from "./Message"

export default class MessageList extends Component {

    render() {
        const { chatData, data_idx, top1_mode } = this.props;
        const max_idx = chatData[data_idx]['max_idx'];
        
        // render whole messages during conversation
        const messages = chatData[data_idx]['text'].map(
            (content, i) => (
                <div key={i}>
                    { (i % 2) === 0
                        ?   <Message
                                id={i}
                                type={true}
                                text={content}
                                img_list = { ((top1_mode === 0 || top1_mode === 2) && max_idx !== i)
                                    ?   null
                                    :   chatData[data_idx]['img'][i]
                                }
                                score_list = {chatData[data_idx]['score'][i]}
                                top1_mode = {top1_mode}
                                top1_target = {max_idx === i}
                            />
                        :   <Message
                                id={i}
                                type={false}
                                text={content}
                                img_list = { ((top1_mode === 0 || top1_mode === 2) && max_idx !== i)
                                    ?   null
                                    :   chatData[data_idx]['img'][i]
                                }
                                score_list = {chatData[data_idx]['score'][i]}
                                top1_mode = {top1_mode}
                                top1_target = {max_idx === i}
                            />
                    }
                </div>
            )
        );

        return (
            <div>
                {messages}
            </div>
        );
    }
}
