
'use client'
import BattleScene from '@/components/BattleScene'
import ProfileCardV2 from './ProfileCardV2'
import DevedexV2 from './DevedexV2'

export default function HeroLargeScreen() {
    return (
        <section className="py-5 bg-[url('/valley1.jpg')] bg-cover bg-bottom rounded-t-lg">
            <div className='grid grid-cols-3 place-items-center mt-5 mb-2 '>

                <ProfileCardV2 />
                <BattleScene />
                <DevedexV2 />
            </div>
        </section>

    )
} 