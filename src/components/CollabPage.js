import React, { useState } from 'react'
import { Spin, Button } from 'antd'
import 'antd/es/spin/style/css';

const CollabPage = () => {
    const [isLoading, setIsLoading] = useState(true)

    return(
        <div>
            {isLoading ? <Spin></Spin> : <h3>done!</h3>}
            <Button type="default" onClick={() => setIsLoading(!isLoading)}>toggle loading</Button>
        </div>
    );
}

export default CollabPage