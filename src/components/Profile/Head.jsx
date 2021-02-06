import React    from 'react';
import Link     from 'next/link';

const ProfileHead = ({ image, name, isVerified = false, location, editable, followable, message = false, followers, followings, distributed, amount, nearFollowers, isRanked = false }) => {

    return(
        <div className="profile_head column">
            <div className="__head row">
                <div className="__quick full column">
                    <div className="__image responsive-img">
                        <img src = { image } alt = { name } />
                    </div>
                    <div className="white-space-8"></div>
                    <div className="__name row align-center">
                        <h2 className="--font-roboto font-medium">
                            { name }
                        </h2>
                        { isVerified && <img src="/images/profile/verified.svg" alt="Verified Status" className="--margin-left-8 --verified" /> }
                    </div>
                    <div className="white-space-4"></div>
                    <div className="__location">
                        <p className="--font-roboto font-tiny">
                            { location }
                        </p>
                    </div>
                </div>
                <div className="__edit full">
                    <div className="btn-container">
                        { editable && 
                            <button className="btn --btn-ghost font-tiny color-primary weight-semi --font-roboto">
                                Edit Profile
                            </button>
                        }
                        { followable && 
                            <button className="btn --btn-ghost --btn-large font-tiny color-primary weight-semi --font-roboto">
                                + Follow
                            </button>
                        }
                    </div>
                    <div className="btn-container">
                        { message && 
                            <Link href = "/message">
                                <a className="responsive-img __message">
                                    <img src="/images/profile/message.svg" alt = "Send message" />
                                </a>
                            </Link>
                        }
                    </div>
                </div>
            </div>
            <div className="__footer wrap">
                <div className="__info align-center row">
                    <p className="__value weight-bold --font-roboto">
                        { followers }
                    </p>
                    <p className="__description --font-roboto">
                        Followers
                    </p>
                </div>
                <div className="__info align-center row">
                    <p className="__value weight-bold --font-roboto">
                        { followings }
                    </p>
                    <p className="__description --font-roboto">
                        Following
                    </p>
                </div>
                <div className="__info align-center row">
                    <p className="__value weight-bold --font-roboto">
                        { distributed } BNB
                    </p>
                    <p className="__description --font-roboto">
                        Distributed
                    </p>
                </div>
                <div className="__info align-center row">
                    <p className="__value weight-bold --font-roboto">
                        { amount } BNB
                    </p>
                    <p className="__description --font-roboto">
                        Amount won
                    </p>
                </div>
            </div>
            <div className="white-space-4"></div>
            { nearFollowers &&
                <div className="__shares row">
                    <div className="__contacts align-center full row --margin-right-16">
                        <div className="__contacts-shares row align-center">
                            <div className="__image responsive-img">
                                { nearFollowers?.map((follow, key) => 
                                    <div className="__image responsive-img" key = { key }>
                                        <img src = { follow.image } alt = { follow.name } />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="__contacts-count">
                            <p className="--font-roboto color-black">
                                <span className="weight-bold --font-roboto --margin-left-8">
                                    { nearFollowers[0].name }
                                </span>
                                <span className="font-tiny --font-roboto --margin-left-4">
                                    { `+ ${nearFollowers.length} more people` }
                                </span>
                            </p>
                        </div>
                    </div>
                    { isRanked &&
                        <div className="__options full row">
                            <button className="btn weight-semi --btn-gold --btn-large --btn-rounded color-white font-mini">
                                Top ranked
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    );

};

export default ProfileHead;