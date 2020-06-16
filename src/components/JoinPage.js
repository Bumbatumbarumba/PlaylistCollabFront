import React, { useState } from 'react'
import { Input, Button, Switch } from 'antd'
import 'antd/dist/antd.css';
import PageHeader from './Header'

const JoinPage = () => {
    const [hasText, setHasText] = useState(false)
    
    const checkForText = (e) => {
        setHasText(e.target.value !== "")
    }

    return (
        <div>
            <PageHeader></PageHeader>
            <form>
                <Input size="large" placeholder="Room code" onChange={e => checkForText(e)}></Input>
                <Button type="primary" disabled={!hasText}>Join Room</Button>
            </form>
        </div>
    );
}

export default JoinPage