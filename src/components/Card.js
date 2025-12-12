import { Children } from 'react';
import './Card.css';

function Card({children}){
    return<>
    <div className="card">
{children}
    </div>
    </>
}

function CardWithImage({src , children}){
    console.log(src, children)
    return<><Card>
    <div className='card-img'>
        <img src={src}/>
       
    </div>
     <div>{children}</div>
    </Card>
    </>
}

function CardWithTitle({title, children}){
    return<><Card>
        <h3>{title}</h3>
    <div className='title'>
        <span>{children}</span>
    </div>
    </Card>
    </>
}

export {
    Card,
    CardWithTitle,
    CardWithImage
}