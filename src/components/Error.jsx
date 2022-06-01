import React from 'react';

const Error = ({name, item}) => {
    let key = 0;
    let flag = 0;
    // eslint-disable-next-line default-case
    switch (name) {
        case 'email': {
            if (item.isDirty) {
                if (item.isEmpty) {
                    flag = 1
                } else if (item.emailError) {
                    flag = 2
                }
            }
            key = 1;
            break;
        }
        case 'password': {
            if (item.isDirty) {
                if (item.isEmpty) {
                    flag = 1
                } else if (item.minLength) {
                    flag = 2
                } else  if(item.maxLength) flag = 3
            }
            key = 2;
            break;
        }
    }

    return (
        <div>
            {key === 1 &&
                <div>
                    {flag === 0 &&
                        <div/>
                    }
                    {flag === 1 &&
                        <div className="error">
                            {item.nullField}
                        </div>
                    }
                    {flag === 2 &&
                        <div className="error">
                            {item.emailErrorField}
                        </div>
                    }
                </div>
            }
            {key === 2 &&
                <div>
                    {flag === 1 &&
                        <div className="error">
                            {item.nullField}
                        </div>
                    }
                    {flag === 2 &&
                        <div className="error">
                            {item.minLengthField}
                        </div>
                    }
                    {flag === 3 &&
                        <div className="error">
                            {item.maxLengthField}
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Error;