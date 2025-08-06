import type { ReactNode } from 'react';

const AlertBlock = ({ children }: { children?: ReactNode }) => {
    return (
        <div className="alert-block">
            <h3>Обратите внимание!</h3>
            {children}
        </div>
    );
};

export default AlertBlock;
