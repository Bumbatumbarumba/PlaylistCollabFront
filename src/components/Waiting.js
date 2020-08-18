import React, { useState } from 'react'
import { Spin, Button, Input, Tooltip, Form } from 'antd'
import 'antd/es/spin/style/css';

export const Waiting = () => {
    return (
        <div>
            <Spin tip="Connecting to room..."></Spin>
        </div>
    )
}