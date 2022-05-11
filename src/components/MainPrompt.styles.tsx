import styled from 'styled-components';

export const FormContainer = styled.form`
    {
    color: #FFF;
    font-size: 20px;
    }
.prompt {
        margin-left: 12px;
        margin-bottom: 20px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
#text {
    width: 500px;
    height: 160px;
    overflow: hidden;
    background-color: #FFF;
    color: #222;
    font-family: Courier, monospace;
    font-weight: normal;
    font-size: 24px;
    resize: none;
    line-height: 40px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 45px;
    padding-bottom: 34px;
    background-image: url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
    background-repeat: repeat-y, repeat;
    -webkit-border-radius: 12px;
    border-radius: 12px;
    -webkit-box-shadow: 0px 2px 14px #000;
    box-shadow: 0px 2px 14px #000;
    border-top: 1px solid #FFF;
    border-bottom: 1px solid #FFF;
    word-wrap: break-word;
}

#title {
    background-color: transparent;
    border-bottom: 3px solid #FFF;
    color: #FFF;
    font-size: 20px;
    font-family: Courier, monospace;
    height: 28px;
    font-weight: bold;
    width: 220px;
}

#button-submit {
    cursor: pointer;
    margin-top: 20px;
    float: right;
    height: 40px;
    padding-left: 24px;
    padding-right: 24px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    text-shadow: 0px -1px 0px #000000;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    border-top: 1px solid #FFF;
    -webkit-box-shadow: 0px 2px 14px #000;
    box-shadow: 0px 2px 14px #000;
    background-color: #62add6;
    background-image: url(https://static.tumblr.com/maopbtg/ZHLmgtok7/button.png);
    background-repeat: repeat-x;
}

#button-submit:active {
    zoom: 1;
    filter: alpha(opacity=80);
    opacity: 0.8;
}

#button-submit:focus {
    zoom: 1;
    filter: alpha(opacity=80);
    opacity: 0.8;
}
`;