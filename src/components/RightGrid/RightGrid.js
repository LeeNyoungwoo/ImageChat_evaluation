import React, { Component } from 'react';
import { Button, Dropdown, Radio, Form } from 'semantic-ui-react'
import './RightGrid.css';

export default class RightGrid extends Component{

    render() {
        const { conv_addIdx, conv_subIdx, data_idx, chatData_length, 
            conv_changePrev, conv_changeNext, prev_status, next_status, stateOptions,
            conv_changeDataset, conv_setMode, modeOptions, purposeOptions,
            conv_setQ1, conv_setQ2, conv_setQ3, conv_setQ4, 
            q1_rating, q2_rating, q3_rating, q4_rating
        } = this.props;

        const downloadTxtFile = (file, name) => {
            const element = document.createElement("a");
            element.href = URL.createObjectURL(file);
            element.download = name;
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();
        }

        const setDone = () => {
            console.log(q1_rating)
            console.log(q2_rating)
            console.log(q3_rating)
            console.log(q4_rating)

            downloadTxtFile(new Blob([q1_rating.join()], {type: 'text/plain'}), 'P1_q1_results.txt')
            downloadTxtFile(new Blob([q2_rating.join()], {type: 'text/plain'}), 'P1_q2_results.txt')
            downloadTxtFile(new Blob([q3_rating.join()], {type: 'text/plain'}), 'P1_q3_results.txt')
            downloadTxtFile(new Blob([q4_rating.join()], {type: 'text/plain'}), 'P1_q4_results.txt')
        }
        
        const setNextStatus = () => {

            if (!prev_status){
                conv_changePrev()
            }
            if (data_idx < chatData_length){
                if (chatData_length === data_idx + 1){
                    conv_changeNext()
                }
                conv_addIdx()
            }
        }

        const setPrevStatus = () => {
            if (!next_status){
                conv_changeNext()
            }
            if (0 < data_idx){
                if (data_idx - 1 === 0){
                    conv_changePrev()
                }
                conv_subIdx()
            }
        }

        const changeDataset = (e, data) => {
            conv_changeDataset(data.value)
        }

        const changeMode = (e, data) => {
            if (data.value === 0){
                conv_setMode(0)
            } else if (data.value === 1){
                conv_setMode(1)
            } else if (data.value === 2){
                conv_setMode(2)
            }
        }

        const changeRateQ1 = (e, data) => {
            const pair = {
                idx: data_idx,
                value: data.value
            }
            conv_setQ1(pair)
        }

        const changeRateQ2 = (e, data) => {
            const pair = {
                idx: data_idx,
                value: data.value
            }
            conv_setQ2(pair)
        }

        const changeRateQ3 = (e, data) => {
            const pair = {
                idx: data_idx,
                value: data.value
            }
            conv_setQ3(pair)
        }

        const changeRateQ4 = (e, data) => {
            const pair = {
                idx: data_idx,
                value: data.value
            }
            conv_setQ4(pair)
        }


        const section = (data_idx+1) + ' / ' + (chatData_length+1)
    
        return (
            <div className="RightGrid">
                <div className="RightTagGrid">
                    <Dropdown
                        placeholder='Select the mode'
                        selection
                        options={modeOptions}
                        onChange={changeMode}
                    />
                    <div style={{height:'5%'}}></div>
                    <Dropdown
                        placeholder='Select the dataset'
                        selection
                        options={stateOptions}
                        onChange={changeDataset}
                    />
                </div>
                <div className="RightQuestionGrid">
                    <div className="RightSubQuestionGrid">
                        <span>1. 치환된 이미지는 원본 문장의 <b style={{color: 'blue'}}>핵심 명사</b>들을 얼마나 잘 포함하고 있나요?</span>
                        <Form>
                            <Form.Field>
                            <Radio
                                label='0'
                                name='radioGroup'
                                value={0}
                                checked={q1_rating[data_idx] === 0}
                                onChange={changeRateQ1}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='1'
                                name='radioGroup'
                                value={1}
                                checked={q1_rating[data_idx] === 1}
                                onChange={changeRateQ1}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='2'
                                name='radioGroup'
                                value={2}
                                checked={q1_rating[data_idx] === 2}
                                onChange={changeRateQ1}
                            />
                            </Form.Field>
                        </Form>
                        <span>2. 치환된 이미지는 원본 문장의 <b style={{color: 'blue'}}>의미</b>를 얼마나 잘 나타내고 있나요?</span>
                        <Form>
                            <Form.Field>
                            <Radio
                                label='0'
                                name='radioGroup'
                                value={0}
                                checked={q2_rating[data_idx] === 0}
                                onChange={changeRateQ2}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='1'
                                name='radioGroup'
                                value={1}
                                checked={q2_rating[data_idx] === 1}
                                onChange={changeRateQ2}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='2'
                                name='radioGroup'
                                value={2}
                                checked={q2_rating[data_idx] === 2}
                                onChange={changeRateQ2}
                            />
                            </Form.Field>
                        </Form>
                        <span>3. 대화에서 원본 문장이 삭제 되고 치환된 이미지가 그 자리를 대체한다면, 변경된 대화의 <b style={{color: 'blue'}}>흐름</b>은 얼마나 자연스러운가요?</span>
                        <Form>
                            <Form.Field>
                            <Radio
                                label='0'
                                name='radioGroup'
                                value={0}
                                checked={q3_rating[data_idx] === 0}
                                onChange={changeRateQ3}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='1'
                                name='radioGroup'
                                value={1}
                                checked={q3_rating[data_idx] === 1}
                                onChange={changeRateQ3}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='2'
                                name='radioGroup'
                                value={2}
                                checked={q3_rating[data_idx] === 2}
                                onChange={changeRateQ3}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='3'
                                name='radioGroup'
                                value={3}
                                checked={q3_rating[data_idx] === 3}
                                onChange={changeRateQ3}
                            />
                            </Form.Field>
                            <Form.Field>
                            <Radio
                                label='4'
                                name='radioGroup'
                                value={4}
                                checked={q3_rating[data_idx] === 4}
                                onChange={changeRateQ3}
                            />
                            </Form.Field>
                        </Form>
                        <span>4. 대화에서 원본 문장이 삭제 되고 치환된 이미지가 그 자리를 대체한다면, 변경된 대화에서 이미지가 사용된 <b style={{color: 'blue'}}>목적</b>은 무엇인가요?</span>
                        <Dropdown
                            placeholder='Select the purpose'
                            selection
                            value={q4_rating[data_idx]}
                            options={purposeOptions}
                            onChange={changeRateQ4}
                        />
                    </div>
                </div>
                <div className="RightTextGrid">
                    <span className="RightTag">{section}</span>
                </div>
                <div className="RightButtonGrid">
                    { prev_status
                        ?   <Button onClick={setPrevStatus} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid color='red'>PREV</Button>
                        :   <Button disabled onClick={setPrevStatus} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid color='red'>PREV</Button>
                    }
                    <div style={{height:'5%'}}></div>
                    { next_status
                        ?   <Button onClick={setNextStatus} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid color='blue'>NEXT</Button>
                        :   <Button positive onClick={setDone} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid>DONE</Button>
                    }
                </div>
            </div>
        );
    }
}