// import LocalizedStrings from 'react-native-localization'

/* API
 setLanguage(languageCode) - to force manually a particular language
 getLanguage() - to get the current displayed language
 getInterfaceLanguage() - to get the current device interface language
 formatString() - to format the passed string replacing its placeholders with the other arguments strings
 */
// import Expo from '@expo';
// const locate = Expo.Util.getCurrentLocaleAsync();

const Languages = {
	ar: {
		//Root (Home)
		home: 'الرئيسية',
		readlater: 'القراءة لاحقاً',
		category: 'التصنيفات',
		back: ' العودة',
		textFilter: 'Recent',

		//Login Form
		passwordUp: 'كلمة المرور',
		passwordnor: 'كلمة المرور',
		forgotPassword: 'هل نسيت كلمة المرور؟',
		login: 'تسجيل الدخول',
		loginSuccess: '',
		noAccount: 'لا تملك حساب؟',
		signup: 'تسجيل جديد',
		singupSuccess: '',
		// MenuSide
		news: 'الأخبار',
		contact: 'إتصل بنا',
		aboutus: 'من نحن؟',
		setting: 'اعدادات',
		logout: "تسجيل خروج ",

		// Post
		post: 'خبر',
		posts: 'أخبار',
		feature: 'أخبار مميزة',
		days: 'أيام',
		editorchoice: 'مختارة لكم',

		// PostDetail
		comment: 'تعليق',
		yourcomment: 'تعليقك',
		relatedPost: 'أخبار مقترحة',

		all: 'الكل',
		forLife: 'للمهتمين في ستايل الحياة',
		powerBy: 'تدار من قبل',
		video: 'فيديو',
		fontSize: 'حجم الخط',
		email: 'البريد الالكتروني',
		enterEmail: 'أدخل البريد الالكتروني',
		enterPassword: 'أدخل الرقم السري ',
		photo: 'صورة',
		clear: 'مسح',
		by: 'من قبل',
		name: 'الاسم',
		enterName: 'ادخل الاسم',
		send: 'ارسال',
		commentSubmit: 'تم ارسال تعليقك، بإنتظار الموافقة عليه',
		recent: 'الحديثة',

		//Layout
		cardView: 'Card View',
		simpleView: 'Simple View',
		twoColumnView: 'Two Column View',
		listView: 'List View',
		advanceView: 'Advance View',

		//readlater
		textBookMark: 'Bookmarks',
		textPosts: 'Posts',
    noBookmark: 'There is no bookmark item',
    ago: 'ago',
    allCategory: 'All Category',
		noResults:'No Results',

    allTag: 'All Tag',
    user: 'User',
	},
	en: {
		//Root (Home)
		home: 'Home',
		readlater: 'Read Later',
		category: 'Category',
		back: ' Back',
		textFilter: 'Recent',

		//Login Form
		passwordUp: 'PASSWORD',
		passwordnor: 'password',
		forgotPassword: 'Forget password',
		for: 'Forgot Password',
		login: 'Sign In',
		loginSuccess: "Sign In Successfull",
		noAccount: 'Do not have an account?',
		signup: 'Sign Up',
		signupSuccess: "Sign Up Successfull",

		// MenuSide
		home: 'ទំព័រដើម',
		// news: 'News',
		// contact: 'Contact',
		// aboutus: 'About Us',
		// setting: 'Setting',
		// search: 'Search',
		// logout: "Logout",

		// Post
		post: 'Post',
		posts: 'Posts',
		feature: 'Feature articles',
		days: 'days',
		editorchoice: 'Editor Choice',

		// PostDetail
		comment: 'Comment',
		yourcomment: 'Your Comment',
		relatedPost: 'Related Post',

		all: 'All',
		forLife: 'for lifestyle people',
		powerBy: 'Power by Carnival',
		video: 'Video',
		changeLanguage: 'Change Language Kh or En',
		changeNotifiacation: 'Turn on or off Notifiacation',
		on: 'On',
		off: 'Off',
		khmer: 'Khmer',
		english: 'English',
		email: 'EMAIL',
		enterEmail: 'Enter your email',
		enterPassword: 'Type your password',
		photo: 'Photo',
		clear: 'Clear All',
		by: "by",
		name: 'NAME',
		enterName: 'Enter name',
		send: 'Send',
		commentSubmit: 'Your Comment is sent and waiting for approving',
		recent: 'Recent Posts',

		//Layout
		cardView: 'Card ',
		simpleView: 'List View',
		twoColumnView: 'Two Column ',
		threeColumnView: 'Three Column ',
		listView: 'List View',
		default: 'Default',
		advanceView: 'Advance ',
    mansoryView: 'Mansory View',
    horizontalView: 'Horizontal View',

		//readlater
		textBookMark: 'Bookmarks',
		textPosts: 'Posts',
		noBookmark: 'There is no bookmark item',
    ago: 'ago',
    allCategory: 'All Category',
		noResults:'No Results',

    allTag: 'All Tags',
    // user: 'User',
	},

	vi: {
		//Root (Home)
		home: 'Trang chủ',
		readlater: 'Đọc sau',
		category: 'Chuyên mục',
		back: 'Quay lại',
		textFilter: 'Recent',

		//Login Form
		passwordUp: 'MẬT KHẨU',
		passwordnor: 'Mật khẩu',
		forgotPassword: 'Quên mật khẩu',
		login: 'Đăng nhập',
		loginSuccess: "Đăng nhập thành công",
		noAccount: 'Bạn chưa có tài khoản?',
		signup: 'Đăng ký',
		signupSuccess: "Đăng ký thành công",

		// MenuSide
		news: 'Tin tức',
		contact: 'Liên hệ',
		aboutus: 'Về chúng tôi',
		setting: 'Thiết lập',
		search: 'Tìm kiếm',
		logout: "Thoát",

		// Post
		post: 'Bài viết',
		posts: 'Bài viết',
		feature: 'Bài viết nổi bật',
		days: 'ngày',
		editorchoice: 'Editor Choice',

		// PostDetail
		comment: 'Bình luận',
		yourcomment: 'Bình luận của bạn',
		realtedPost: 'Bài viết liên quan',

		all: 'Tất cả',
		forLife: 'cho người sành điệu',
		powerBy: 'Tạo bởi Carnival',
		video: 'Phim',
		fontSize: 'Font size của nội dung',
		email: 'Địa chỉ email',
		enterEmail: 'Gõ địa chỉ email',
		enterPassword: 'Gõ mật khẩu của bạn',
		photo: "Hình ảnh",
		clear: 'Xóa',
		by: "Bởi",
		name: 'Tên',
		enterName: 'Gõ Tên của bạn',
		send: 'Send',
		commentSubmit: 'Comment của bạn đang được review',
		recent: 'Bài Viết Gần đây',

		//Layout
		cardView: 'Card View',
		simpleView: 'Simple View',
		twoColumnView: 'Two Column View',
		listView: 'List View',
		advanceView: 'Advance View',
		mansoryView: 'Mansory View',
		horizontalView: 'Horizontal View',

		//readlater
		textBookMark: 'Bookmarks',
		textPosts: 'Posts',
    noBookmark: 'There is no bookmark item',
    ago: 'ago',
    allCategory: 'All Category',
		noResults:'No Results',

		allTag: 'All Tags',
		user: 'User',
	},
	///Put other languages here
	kh: {
		//Root (Home)
		home: 'ទំព័រដើម',
		changeLanguage: 'ការផ្លាស់ប្ដូរភាសាខ្មែរឬអង់គ្លេស',
		changeNotifiacation: 'បើកឬបិទការជូនដំណឹង',
		on: 'បើក',
		off: 'បិត',
		khmer: 'ខ្មែរ',
		english: 'អង់គ្លេស',
	},
};

// let Language = Languages[locate];
// if (Language == null)	{
  let Language = Languages['en'];
// }

export default Language
