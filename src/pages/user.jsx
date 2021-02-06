/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Page /user
*/

import Head from 'next/head';
import PostPills    from 'components/Posts/PostPills';
import PostImage    from 'components/Posts/PostImage';
import PostPodcast  from 'components/Posts/PostPodcast';
import PostImages   from 'components/Posts/PostImages';
import PostVideo    from 'components/Posts/PostVideo';
import PostText     from 'components/Posts/PostText';
import ProfileHead      from 'components/Profile/Head';
import Header from 'components/Header';
import Footer from 'components/Footer';


const PageUser = _ => {

    // Sample data
    const nearFollowers = [
        {
            name: "Yulissa Torres",
            image: "/images/post/contact1.png"
        },
        {
            name: "Contact 2 name",
            image: "/images/post/contact2.png"
        },
        {
            name: "Contact 2 name",
            image: "/images/post/contact3.png"
        }
    ];

	return (
		<div className="page-profile full">
			<Head>
				<title>Woonkly - User profile</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>
			<main className="column full">
				<Header showProfile = { true } />
				<div className="main justify-center">
					<div className="container column">
                        <div className="row-responsive justify-center --to-column-mobile">
                            <div className="feed column">
                                <ProfileHead image = "/images/profile/profile-image.png" name = "Mr Santos" isVerified = { true } followable = { true } message = { true } location = "Madrid España" followers = "245K" followings = "134" distributed = "0.210" amount = "12.5K" nearFollowers = { nearFollowers } isRanked = { true } />
                                <div className="white-space-16"></div>
                                <PostPills isProfile = { true } />
                                <div className="white-space-16"></div>
                                <PostImage boosted = { true } />
                                <PostPodcast image = "/images/post/post-library.jpg" />
                                <PostImages images = {["/images/post/post-images-1.png", "/images/post/post-images-2.png" ] } />
                                <PostVideo image = "/images/post/post-city.jpg" />
                                <PostText />
                            </div>
                        </div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);

};

export default PageUser;