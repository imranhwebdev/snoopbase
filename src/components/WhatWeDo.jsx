import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'

export default function WhatWeDo(){
    const WhatWeDo= [
        {
            icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1054 23.4063C37.2377 25.0065 40 29.0072 40 33.4552V37.9997C40 39.1043 39.1046 39.9997 38 39.9997H32.1978V28.6751C32.1978 27.5152 31.2549 26.5691 30.0988 26.5691H9.99883C8.84234 26.5691 7.89905 27.5148 7.89905 28.6751V39.9997H2C0.895431 39.9997 0 39.1043 0 37.9997V33.4552C0 28.8062 2.93006 24.7486 7.31146 23.2547C6.88912 21.8752 6.65185 20.3936 6.58921 18.8704C6.43259 15.0901 7.34747 11.0492 9.16394 7.67883C14.727 -2.64369 25.7337 -2.50225 31.264 7.76081C33.0863 11.1423 34.0097 15.1876 33.8539 18.9634C33.7898 20.5104 33.5442 22.0127 33.1057 23.4055L33.1054 23.4063ZM19.9995 30.2473C22.1846 30.2473 23.9561 32.0237 23.9561 34.2157C23.9561 36.4073 22.1842 38.1833 19.9995 38.1833C17.8144 38.1833 16.0429 36.4069 16.0429 34.2157C16.0429 32.0237 17.8147 30.2473 19.9995 30.2473ZM17.9126 33.3081H22.0855V36.4809H17.9126V33.3081ZM18.5582 33.2464V32.5346C18.5582 31.8756 19.0954 31.3375 19.7517 31.3375H20.2216C20.8783 31.3375 21.4151 31.8756 21.4151 32.5346V33.2464H21.0432V32.5346C21.0432 32.0814 20.6731 31.7105 20.2216 31.7105H19.7517C19.3006 31.7105 18.9304 32.0818 18.9304 32.5346V33.2464H18.5582ZM19.9995 34.1672C20.2213 34.1672 20.402 34.3481 20.402 34.5709C20.402 34.736 20.3034 34.8772 20.1619 34.9404V35.6222H19.8375V34.9404C19.696 34.8775 19.5973 34.736 19.5973 34.5709C19.5973 34.3485 19.7773 34.1672 19.9995 34.1672ZM30.7016 40H9.39601V28.6754C9.39601 28.3439 9.66928 28.0701 9.99909 28.0701H30.0991C30.4289 28.0701 30.7021 28.3442 30.7021 28.6754L30.7016 40ZM18.4685 22.1145H21.615V23.2083H18.4685V22.1145ZM15.3131 21.5692C15.51 21.0568 15.7433 20.5021 16.0616 20.0575C16.597 19.3089 17.2127 19.111 18.0898 19.0724C19.3309 19.0179 20.8827 19.0179 22.1238 19.0724C23.0023 19.1114 23.6161 19.3086 24.1527 20.0575C24.471 20.502 24.7039 21.0568 24.9009 21.5692C25.4921 20.8264 27.2656 18.8323 27.1853 17.7146C27.1659 17.4467 27.1432 17.1369 27.2401 16.6623C27.3614 16.0712 28.5204 14.8621 26.8671 14.6697C26.1124 14.5808 26.0274 14.7455 25.896 15.4706C25.4773 17.7771 22.5263 17.9818 21.4778 16.0657C20.6494 14.5505 19.3222 14.3782 18.5863 16.0737C17.8097 17.8659 14.7716 17.9681 14.3187 15.4706C14.0267 13.8655 11.9128 14.6978 12.6469 16.1235C13.0174 16.8443 13.0991 16.741 13.0293 17.7146C12.9483 18.8323 14.7215 20.8264 15.3131 21.5692ZM23.8099 22.81C23.6104 22.2412 23.3227 21.3897 22.9771 20.9065C22.7229 20.5519 22.4712 20.5432 22.0618 20.5255C21.4278 20.4981 18.7869 20.4981 18.1528 20.5255C17.7438 20.5432 17.4914 20.5519 17.2376 20.9065C16.8919 21.389 16.6028 22.2419 16.4041 22.81C17.4057 23.7908 18.7195 23.9952 20.1072 23.9952C21.4955 23.9952 22.8082 23.7908 23.8099 22.81ZM10.8698 16.4337C10.8029 16.3806 10.6225 16.4507 10.4054 16.5818C6.15717 19.1424 10.5433 25.3164 17.459 25.1319C11.6558 21.5977 12.0691 17.3867 10.8698 16.4337ZM29.1301 16.4337C28.9716 16.5597 29.3219 21.3705 22.1952 25.1702C27.1498 25.3024 35.5353 20.1637 29.5945 16.5818C29.3774 16.4511 29.197 16.3806 29.1301 16.4337Z" fill="currentColor"/>
            </svg>`,
            title:'Penetration Testing',
            des:'Penetration testing is a proactive approach to identifying security weaknesses.',
        },
        {
            icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.39583 12.0928C1.76584 12.0928 2.12059 11.9458 2.38254 11.6841C2.64416 11.4225 2.79117 11.0678 2.79117 10.6974V2.79069H10.6979C11.1966 2.79069 11.6572 2.5247 11.9064 2.09302C12.1555 1.66133 12.1555 1.12935 11.9064 0.697672C11.6572 0.265985 11.1965 0 10.6979 0H1.39615C1.02582 0 0.671063 0.147014 0.40944 0.408637C0.147817 0.67026 0.000802994 1.02502 0.000802994 1.39534V10.6971C0.000802994 11.0674 0.147817 11.4222 0.40944 11.6838C0.671063 11.9454 1.02582 12.0925 1.39615 12.0925L1.39583 12.0928Z" fill="currentColor"/>
            <path d="M1.39566 39.9997H10.6974C11.1961 39.9997 11.6567 39.7338 11.9059 39.3021C12.155 38.8704 12.155 38.3384 11.9059 37.9067C11.6567 37.475 11.1961 37.209 10.6974 37.209H2.79069V29.3023C2.79069 28.8037 2.5247 28.343 2.09302 28.0939C1.66133 27.8447 1.12935 27.8447 0.697672 28.0939C0.265985 28.343 0 28.8037 0 29.3023V38.6049V38.6046C0 38.9749 0.147014 39.3296 0.408637 39.5913C0.67026 39.8529 1.02502 39.9999 1.39534 39.9999L1.39566 39.9997Z" fill="currentColor"/>
            <path d="M39.9997 1.39559C39.9997 1.02526 39.8527 0.670504 39.591 0.408881C39.3294 0.147258 38.9746 0.000244141 38.6043 0.000244141H29.3026C28.8039 0.000244141 28.3433 0.266229 28.0941 0.697917C27.8449 1.1296 27.8449 1.66158 28.0941 2.09326C28.3433 2.52495 28.8039 2.79093 29.3026 2.79093H37.2096L37.2093 10.6977C37.2093 11.1963 37.4753 11.657 37.907 11.9061C38.3387 12.1553 38.8706 12.1553 39.3023 11.9061C39.734 11.657 40 11.1963 40 10.6977L39.9997 1.39559Z" fill="currentColor"/>
            <path d="M39.9996 29.3026C39.9996 28.8039 39.7336 28.3433 39.3019 28.0941C38.8702 27.8449 38.3383 27.8449 37.9066 28.0941C37.4749 28.3433 37.2089 28.8039 37.2089 29.3026V37.2096L29.3022 37.2093C28.8035 37.2093 28.3429 37.4753 28.0937 37.907C27.8445 38.3387 27.8445 38.8706 28.0937 39.3023C28.3429 39.734 28.8035 40 29.3022 40H38.6047H38.6044C38.9747 40 39.3295 39.853 39.5911 39.5914C39.8527 39.3297 39.9998 38.975 39.9998 38.6046L39.9996 29.3026Z" fill="currentColor"/>
            <path d="M6.97699 5.58154H16.2796C17.0501 5.58154 17.6749 6.3521 17.6749 6.97689V16.2795C17.6749 17.05 17.0501 17.6748 16.2796 17.6748H6.97699C6.20643 17.6748 5.58164 16.9042 5.58164 16.2795V6.97689C5.58164 6.20633 6.20643 5.58154 6.97699 5.58154Z" fill="currentColor"/>
            <path d="M34.4182 16.2789V6.97713C34.4182 6.60681 34.2712 6.25205 34.0096 5.99042C33.748 5.7288 33.3932 5.58179 33.0229 5.58179H23.7211C23.3508 5.58179 22.996 5.7288 22.7344 5.99042C22.4728 6.25205 22.3258 6.60681 22.3258 6.97713V16.2797V16.2794C22.3258 16.6497 22.4728 17.0045 22.7344 17.2661C22.996 17.5277 23.3508 17.6747 23.7211 17.6747H33.0237H33.0234C33.3937 17.6747 33.7485 17.5277 34.0101 17.2661C34.2717 17.0045 34.4187 16.6497 34.4187 16.2794L34.4182 16.2789Z" fill="currentColor"/>
            <path d="M5.58164 33.023C5.58164 33.3934 5.72865 33.7481 5.99028 34.0097C6.2519 34.2714 6.60666 34.4184 6.97699 34.4184H16.2795H16.2792C16.6496 34.4184 17.0043 34.2714 17.2659 34.0097C17.5276 33.7481 17.6746 33.3934 17.6746 33.023V23.7213C17.6746 23.3509 17.5276 22.9962 17.2659 22.7346C17.0043 22.4729 16.6496 22.3259 16.2792 22.3259H6.97747C6.60715 22.3259 6.25239 22.4729 5.99076 22.7346C5.72914 22.9962 5.58213 23.3509 5.58213 23.7213L5.58164 33.023Z" fill="currentColor"/>
            <path d="M33.023 28.372C33.023 30.9406 30.9406 33.023 28.3719 33.023C25.8033 33.023 23.7209 30.9406 23.7209 28.372C23.7209 25.8034 25.8033 23.7209 28.3719 23.7209C30.9406 23.7209 33.023 25.8034 33.023 28.372Z" fill="currentColor"/>
            </svg>`,
            title:'Vulnerabilities Scaning',
            des:'Vulnerability scanning is the process of identifying security vulnerabilities',
        },
        {
            icon:`<svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.252 5.23769C30.252 8.13029 23.6353 10.4754 15.4734 10.4754C7.31143 10.4754 0.694702 8.13029 0.694702 5.23769C0.694702 2.3451 7.31143 0 15.4734 0C23.6353 0 30.252 2.3451 30.252 5.23769Z" fill="currentColor"/>
            <path d="M11.8704 32.0934V34.3285H14.239L9.9688 39.9999L5.69861 34.3285H8.10059V22.9858H11.8704V32.0935" fill="currentColor"/>
            <path d="M19.0763 28.6567V39.9994H22.8462V28.6567H25.2481L20.978 22.9854L16.7078 28.6567H19.0763Z" fill="currentColor"/>
            <path d="M15.4734 11.476C9.26825 11.476 2.76269 10.0749 0.694702 7.40599V29.2907C2.29602 29.9579 4.59796 30.792 7.40027 31.4258V22.3181H12.5045V32.1594C13.5387 32.2261 14.6396 32.2928 15.7739 32.2594C16.6746 32.2594 17.542 32.2261 18.4093 32.1594V29.2903H15.3402L20.9448 21.8509L26.5494 29.2903H23.5136V31.392C26.3159 30.7915 28.5844 29.9575 30.2192 29.2569V7.40576C28.1841 10.0412 21.6788 11.4758 15.4733 11.4758L15.4734 11.476ZM11.737 19.8829C12.0038 20.1498 12.0038 20.5502 11.737 20.817C11.6035 20.9505 11.4367 21.0172 11.2699 21.0172C11.1031 21.0172 10.9363 20.9505 10.8028 20.817L7.46676 17.4476L10.8028 14.1115C11.0697 13.8446 11.4701 13.8446 11.737 14.1115C12.0038 14.3784 12.0038 14.7787 11.737 15.0456L9.33497 17.4476L11.737 19.8829ZM17.375 13.7112L14.8395 21.6179C14.7395 21.8848 14.4726 22.0849 14.2057 22.0849C14.139 22.0849 14.0722 22.0849 14.0055 22.0516C13.6386 21.9515 13.4718 21.5511 13.5718 21.2175L16.1073 13.3108C16.2073 12.9438 16.6077 12.777 16.9413 12.8771C17.3083 12.9772 17.4751 13.3775 17.375 13.7112ZM20.1439 20.817C20.0104 20.9505 19.8436 21.0172 19.6768 21.0172C19.51 21.0172 19.3432 20.9505 19.2098 20.817C18.9429 20.5502 18.9429 20.1498 19.2098 19.8829L21.6118 17.481L19.2098 15.079C18.9429 14.8121 18.9429 14.4118 19.2098 14.1449C19.4767 13.878 19.877 13.878 20.1439 14.1449L23.48 17.4476L20.1439 20.817Z" fill="currentColor"/>
            </svg>`,
            title:'Source Code Review',
            des:'Source code review is the process of analyzing the source code of a software application.',
        },
        {
            icon:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0831 1.0324V20.3748H16.1146V3.76166C16.1146 3.28794 15.6836 2.85684 15.21 2.85684H10.6159C9.81321 2.89092 9.55986 3.25166 9.54152 3.94571V20.3754H6.57305V12.7403C6.57305 12.2665 6.14205 11.8354 5.66845 11.8354H0.904597C0.43099 11.8354 0 12.2666 0 12.7403V21.0678C0.0126211 21.8963 0.38242 22.1627 1.0886 22.1847H4.76386V35.0368C4.76386 35.7037 5.22768 35.9272 5.86659 35.9417H10.4464C10.9201 35.9417 11.351 35.5105 11.351 35.0368V22.1847H14.3053V27.1757C14.3107 27.7599 14.7095 28.0783 15.2383 28.0805H19.988C20.4616 28.0805 20.8926 27.6494 20.8926 27.1757V22.1847H23.861V36.6487C23.8715 37.3339 24.3179 37.5273 24.9496 37.5535H29.5295C30.0031 37.5535 30.4341 37.1224 30.4341 36.6487V22.1847H33.3884V39.0952C33.3884 39.5689 33.8194 40 34.293 40H38.9012C39.703 39.994 39.9674 39.6112 39.9756 38.9111V21.5054C40.1157 20.9635 39.6304 20.3566 39.071 20.3743H35.198V9.50167C35.198 8.8045 34.807 8.4532 34.1093 8.44124H29.6851C28.9461 8.45796 28.6441 8.81839 28.6249 9.45942V20.3748H25.6706V0.904825C25.6706 0.431099 25.2396 0 24.766 0H20.0591C19.3709 0.0104153 19.0825 0.477516 19.0838 1.032L19.0831 1.0324Z" fill="currentColor"/>
            </svg>`,
            title:'Performance Test',
            des:'The process of testing a computer system, network, or application to determine its speed, responsiveness.',
        },
        {
            icon:`<svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.5998 13.3271H28.8999V11.4865C28.8999 5.26111 23.4495 0 17 0C10.5501 0 5.10007 5.25804 5.10007 11.4865V13.3271H3.40014C1.52317 13.3271 0 14.8207 0 16.6613V21.6626C0 23.5032 1.52317 24.9969 3.40014 24.9969H5.95018C6.41949 24.9969 6.80029 24.6218 6.80029 24.1632L6.79972 17.483C9.1491 17.483 17.9215 16.4861 17.9215 11.5847C17.9215 11.1245 18.3023 10.7544 18.7716 10.7544C19.2409 10.7544 19.6217 11.1295 19.6217 11.5897C19.6217 13.4102 24.7167 17.4963 26.9877 17.4963C27.0625 17.4963 27.1306 17.5198 27.2003 17.5346L27.2 34.3702C27.2 35.1654 25.7955 36.6657 25.0547 36.6657H21.9437C21.5885 35.6987 20.655 34.9987 19.5502 34.9987H14.4498C13.0439 34.9987 11.8998 36.1221 11.8998 37.4994C11.8998 38.8797 13.0439 40 14.4498 40H19.5499C20.655 40 21.5919 39.3031 21.9434 38.333H25.0544C26.8733 38.333 28.8999 35.9725 28.8999 34.3702V24.9964H30.5999C32.4768 24.9964 34 23.5028 34 21.6622V16.6609C34 14.8206 32.4768 13.3269 30.6001 13.3269L30.5998 13.3271ZM27.1997 13.4836C25.2448 8.0607 21.6292 5.00293 16.9996 5.00293C12.3688 5.00293 8.75128 8.05534 6.79941 13.4736V11.4882C6.79941 6.16851 11.4712 1.66931 16.9996 1.66931C22.528 1.66931 27.1997 6.16544 27.1997 11.4882V13.4836Z" fill="currentColor"/>
            <path d="M27.2571 25.2838V18.5856C24.5587 17.6978 21.1469 15.2181 19.3014 12.7007C16.994 17.1937 9.95886 18.4586 6.41869 18.8128V25.2838C6.41869 31.5308 11.0927 36.6161 16.8383 36.6161C22.5829 36.6161 27.2579 31.5308 27.2579 25.2838H27.2571Z" fill="currentColor"/>
            </svg>`,
            title:'Security Consult',
            des:'Security consulting is a service provided by security professionals to help organizations identify.',
        },
        {
            icon:`<svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5061 6.77961C24.2714 6.72204 24.0411 6.65562 23.8197 6.58034C23.5717 6.4962 23.337 6.40764 23.1112 6.3058C20.9281 5.35817 19.7414 3.81272 19.7281 3.79498L19.2321 3.13076L18.6919 3.75956C17.3147 5.36258 15.3972 6.37223 12.9883 6.76188C12.3329 6.86815 11.7262 6.91244 11.217 6.92572C10.969 6.93015 10.7476 6.93015 10.5528 6.92572C10.2649 6.91686 10.0347 6.89915 9.88855 6.88586C10.1144 3.05106 13.3071 0 17.1995 0C21.0565 0 24.2271 2.99347 24.5061 6.77961Z" fill="currentColor"/>
            <path d="M24.4842 8.13918C24.3026 9.86172 23.5675 11.6729 22.4339 13.1253C21.7564 13.9977 20.9771 14.6885 20.1268 15.1845C19.188 15.7336 18.2006 16.0126 17.1998 16.0126C16.1991 16.0126 15.2115 15.7336 14.2728 15.1845C13.4226 14.6885 12.6432 13.9933 11.9657 13.1253C10.8542 11.6995 10.1236 9.92374 9.92877 8.22331C10.1059 8.23659 10.3317 8.24988 10.6019 8.25431C10.6993 8.25431 10.7967 8.25873 10.903 8.25873C11.0225 8.25873 11.1421 8.25873 11.275 8.25431C11.8196 8.24102 12.4617 8.19231 13.1614 8.0816C15.5836 7.69635 17.6471 6.70004 19.1838 5.18115C19.8657 5.88967 21.2119 7.05875 23.1869 7.76727C23.395 7.84255 23.612 7.9134 23.8378 7.97539C24.0415 8.03739 24.2585 8.09053 24.4844 8.13923L24.4842 8.13918Z" fill="currentColor"/>
            <path d="M27.9336 22.6504C27.8539 22.2474 27.7255 21.8577 27.5528 21.4947C27.2206 20.7862 26.7203 20.1529 26.1003 19.6703C25.5866 19.2673 25.0109 18.975 24.3821 18.7935L19.8786 17.5049H14.516L10.0125 18.7935C9.38817 18.9706 8.80807 19.2673 8.29438 19.6703C7.67444 20.1529 7.17404 20.7862 6.84189 21.4947C6.66919 21.8622 6.54077 22.2519 6.46549 22.6504L5.89868 25.5155H15.6057L15.6544 25.294L15.805 24.6298L16.2832 22.4998H18.1209L18.5992 24.6298L18.7984 25.5155H28.5055L27.9336 22.6504ZM18.2047 21.1713H16.1943L15.2422 18.8332H19.1611L18.2047 21.1713Z" fill="currentColor"/>
            <path d="M31.3256 32.4189V40H22.3498V35.6515H21.0213V40H13.3782V35.6515H12.0498V40H3.07391V32.4189H31.3256Z" fill="currentColor"/>
            <path d="M0.240112 26.8481H34.1605V31.0904H0.240112V26.8481Z" fill="currentColor"/>
            <path d="M32.9556 20.0155V25.4711H31.6272V20.4805L28.306 16.2825C28.1289 16.3401 27.9429 16.3666 27.7569 16.3666C27.686 16.3666 27.6196 16.3622 27.5488 16.3533C27.0661 16.3002 26.6365 16.0611 26.331 15.6803L25.4453 14.5687C25.1442 14.1879 25.0069 13.7141 25.0601 13.2314C25.1132 12.7487 25.3523 12.3191 25.7332 12.0136C26.114 11.7125 26.5878 11.5752 27.0705 11.6284C27.5532 11.6815 27.9828 11.9206 28.2883 12.3015L29.174 13.4174C29.6478 14.0107 29.6876 14.8123 29.3378 15.4367L32.9556 20.0155Z" fill="currentColor"/>
            </svg>`,
            title:'Security Training',
            des:'This training can cover a wide range of topics, including cybersecurity, physical security.',
        },
    ]

    return(
        <div className="weDo base-padding">
            <Container>
                <SectionTitle title='What We Do' des='Today, information systems are widely used in many organizations. However, it is necessary to have all systems and data to be secured. To increase security, we provide various of services to your organization including' />
                <Row className="weDo_Wrapper">
                    {WhatWeDo.map((item,index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className="weDo-card text-center">
                                <div className="weDo-icon" dangerouslySetInnerHTML={{__html: item.icon}}></div>
                                <h4>
                                    {item.title}
                                </h4>
                                <p>
                                    {item.des}
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}