import { Button } from '@/components/ui/button';

const SlideContent = () => {
    return (
        <div className="grid w-full gap-4 lg:grid-cols-2">
            <img src="/assets/sesor/main_page/promotion.png" className="aspect-video w-full object-cover" />
            <div className="text-primary">
                <h1 className="font-manrope-semi-bold text-[15px] leading-[1.2]! tracking-tighter">
                    Sesor Express – Fast and reliable $1 delivery service in Phnom Penh. Send up to 5kg parcels with ease and enjoy affordable bulk
                    delivery for your business.
                </h1>
                <ul className="mt-4 list-inside font-manrope-regular list-disc text-[15px]">
                    <li>Sesor Express - $1 within Phnom Penh </li>
                    <li>Min.10 orders</li> <li>Max.5Kg/Parcel</li>
                    <li>1-2 Days Delivery</li>
                    <li>Note: Limited offer!</li>
                    <li>You Sell! We Deliverd!</li>
                    <li>Just 1$!</li>
                    <li>Contact us!</li>
                    <li>Smart: 081 210 111</li>
                    <li>Cellcard: 061 210 111</li>
                </ul>
                <div className="mt-5 flex items-center gap-4">
                    <Button size="lg" className="rounded-full font-manrope-bold text-[15px] bg-[#93288D]">
                        <a href='https://www.facebook.com/SESORexpress/' target='_blank'>Visit Facebook Page</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SlideContent;
