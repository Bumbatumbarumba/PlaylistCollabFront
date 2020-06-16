import React from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css';

const JoinPage = () => {
    return (
        <div>
            <h3>Join Page</h3>
            <form>
                <Input size="large" placeholder="Room code"></Input>
                <Button type="primary">Join Room</Button>
            </form>
        </div>
    );
}

export default JoinPage