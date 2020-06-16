import React, { useState } from 'react'
import { Spin, Button } from 'antd'
import 'antd/es/spin/style/css';
import PageHeader from './Header'

const CollabPage = () => {
    const [isLoading, setIsLoading] = useState(true)

    return(
        <div>
            <PageHeader></PageHeader>
            {isLoading ? 
                <Spin></Spin> 
                : 
                <div>
                    <h3>done!</h3>
                </div>}
            <Button type="default" onClick={() => setIsLoading(!isLoading)}>{isLoading ? "stop " : "start "} loading</Button>
        </div>
    );
}

export default CollabPage