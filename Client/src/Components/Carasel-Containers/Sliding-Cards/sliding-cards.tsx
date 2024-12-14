import { useEffect, useState } from 'react';

import './sliding-cards.css'
import Card from '../../Card/card'

import { PROJECT_WORK } from '../../../../Data/Project-Work/project-work-information.tsx'



export default function SlidingCards() {
    const size = PROJECT_WORK.length;
    const screenPositions = [550, 1000, 2000, 2700]

    const [isMoving, setMove] = useState(new Array(size).fill(false));
    const [currentScreenPosition, setPosition] = useState(0);


    useEffect(() => {
        window.addEventListener('wheel', () => {
            setPosition(window.scrollY)
            fireForward()
        })
        window.addEventListener('touchmove', () => {
            setPosition(window.scrollY)
            fireForward()
        })
    })
    
    function createMovingContainer() {
        
        const x = 'move' // the class name that moves them
        
        return (
            PROJECT_WORK.map(( item, i ) => {
                return (
                    <span className={ (isMoving[i]) ? x : ''} key={i}>
                        <Card 
                            cardInformation={
                                {
                                    title: item.heading,
                                    description: item.description,
                                    url: item.url,
                                    image: item.image,

                                }
                            }
                        />
                    </span>
                )
            })
        )
    }


    function fireForward() {
        if (screenPositions[0] < currentScreenPosition) moveForwardContainer(0);
        if (screenPositions[1] < currentScreenPosition) moveForwardContainer(1);
        if (screenPositions[2] < currentScreenPosition) moveForwardContainer(2);
        if (screenPositions[3] < currentScreenPosition) moveForwardContainer(3);

    }

    function moveForwardContainer(index:number) {

        const update = [...isMoving];
        // const index = _getNextFalseIndex(update);
        update[index] = true;
        setMove(update);
    }


    // function moveBackContainer(index:number) {
    //     if (isRunning) return

    //     setRunning(true)

    //     const update = [...isMoving];
    //     // const index = _getNextTrueIndex(update);
    //     update[index] = false;
    //     setMove(update)

    //     setTimeout(() => {
    //         setRunning(false); 
    //     }, 1000);
    // }
    // function _getNextTrueIndex(arr:Array<boolean>) {
    //     return arr.findIndex(_isTrue);
    // }
    // function _isTrue(item:boolean) {
    //     return (item === true);
    // }
    // function _getNextFalseIndex(arr:Array<boolean>) {
    //     return arr.findIndex(_isFalse)
    // }
    // function _isFalse(item:boolean) {
    //     return (item === false)
    // }


    return (
        <div id='sliding-card'>
            {createMovingContainer()}
        </div>
    )
}


