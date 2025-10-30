import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CheckBoxTypeOfDelivery from './CheckBoxTypeOfDelivery';
import CheckBoxContact from './CheckBoxContact';
import ButtonSimple from '../Bottons/ButtonSimple';

const InquiryLeadForm = () => (
    <div id='inquiry-lead-form'>
        <div className="section-container mt-10">
            <h2 className="font-manrope-extra-bold tracking-tight text-2xl md:text-3xl">Inquiry Lead Form</h2>
            <p className="mt-0.5 text-base sm:text-lg font-manrope-semi-bold ">Want to know your delivery rate? Let’s get you the details!</p>
            <div className="mt-7 md:mt-10 grid gap-10 md:gap-10 lg:grid-cols-2">
                {/* Form */}
                <Card className="border-none py-0 shadow-none">
                    <CardContent className="p-0">
                        <form>
                            <div className="grid gap-x-8 gap-y-4 md:gap-y-6 md:grid-cols-2">
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="text-[18px] md:text-[20px] font-manrope-semi-bold" htmlFor="firstName">
                                        Name
                                    </Label>
                                    <Input id="name" className="mt-0.5 h-10 bg-white shadow-none border border-black" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="text-[18px] md:text-[20px] font-manrope-semi-bold" htmlFor="numberOrTelegram">
                                        Contact Number/Telegram
                                    </Label>
                                    <Input id="numberOrTelegram" className="mt-0.5 h-10 bg-white shadow-none border border-black" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="text-[18px] md:text-[20px] font-manrope-semi-bold" htmlFor="businessOrStoreName">
                                        Business / Store Name
                                    </Label>
                                    <Input id="name" className="mt-0.5 h-10 bg-white shadow-none border border-black" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="text-[18px] md:text-[20px] font-manrope-semi-bold" htmlFor="pickUpAddress">
                                        Pick-up Address
                                    </Label>
                                    <Input id="pickUpAddress" className="mt-0.5 h-10 bg-white shadow-none border border-black" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <Label className="text-[18px] md:text-[20px] font-manrope-semi-bold" htmlFor="deliveryAddress">
                                        Delivery Address
                                    </Label>
                                    <Input id="deliveryAddress" className="mt-0.5 h-10 bg-white shadow-none border border-black" />
                                </div>
                                <div className="col-span-2">
                                    <Label
                                        className="text-[18px] md:text-[20px] font-manrope-semi-bold"
                                        htmlFor="message"
                                    >
                                        Message
                                    </Label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Write your message here..."
                                        className="mt-0.5 w-full rounded-md border border-black bg-white p-2 text-base shadow-none focus-visible:outline-none"
                                    ></textarea>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <p className="text-[18px] md:text-[20px] font-manrope-semi-bold">Type of Delivery</p>
                                    <CheckBoxTypeOfDelivery />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <p className="text-[18px] md:text-[20px] font-manrope-semi-bold">Preferred Contact Method</p>
                                    <CheckBoxContact />
                                </div>
                            </div>
                            <div className='mt-6'>
                            <ButtonSimple title={'Book A Delivery'} link={'#'}/>

                            </div>
                        </form>
                    </CardContent>
                </Card>
                <div>
                    <img src="/assets/sesor/service/Service-03.png" />
                </div>
            </div>
        </div>
    </div>
);

export default InquiryLeadForm;
