function ReduceData()
{
    const data =     [
        {
          "name": "người nhện yêu đương",
          "time": "3h10",
          "img": "http://starlight.vn/Areas/Admin/Content/Fileuploads/images/POSTER/spiderman-no-wya-home.png",
          "note": "Bị lộ mặt và trở thành kẻ thù quốc dân, Peter Parker tìm đến Dr Strange để nhờ thực hiện câu thần chú, khiến mọi người quên đi việc cậu là Spider-Man. Thế nhưng, quá trình thực hiện xảy ra sự cố. Đa vũ trụ hình thành. Những kẻ thù ở các vũ trụ trước ",
          "category": "action",
          "id": "1",
          "actor": " Tom Holland, Zendaya, Willem Dafoe, Jamie Foxx, Benedict Cumberbatch",
          "director": "Jon Watts"
        },
        {
          "name": "Black Widow - Góa phụ đen",
          "time": "2h13",
          "img": "https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/b/l/black_widow_-_final_poster_1_.jpg",
          "note": "Đây được biết đến là bộ phim được mong chờ nhất của nhà Marvel năm 2021 Black Widow kể về câu chuyện quay ngược lại quá khứ của Natasha cùng những chuyến phiêu lưu của cô trước khi gia nhập S.H.I.E.L.D.",
          "category": "action",
          "id": "2",
          "actor": "Cate Shortland, Florence Pugh, Robert Downey Jr",
          "director": "Cate Shortland"
        },
        {
          "name": "Godzilla and Kong - Godzilla đại chiến Kong",
          "time": "1h50",
          "img": "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
          "note": "Bộ phim là tác phẩm thứ tư về quái vật Godzilla do hãng phim Hollywood đình đám sản xuất. Bộ phim kể về sự đối đầu của hai phe đối lập Godzilla và Kong, với những pha hành động đẹp mắt cùng những tuyến nhân vật đầy hấp dẫn đã tạo nên những thước phim điện ảnh đầy giá trị.",
          "category": "action",
          "id": "3",
          "actor": " Alexander Skarsgard, Millie Bobby Brown",
          "director": "Adam Wingard "
        },
        {
          "name": "Trước Ngày Em Đến - Me Before You",
          "time": "1h50",
          "img": "https://bloganchoi.com/wp-content/uploads/2016/06/me-before-you.jpg",
          "note": "biến đây trở thành tác phẩm điện ảnh đầu tiên do cô đạo diễn chính. Sharrock cùng Moyes dành nhiều tháng viết kịch bản trước khi bản nháp cuối cùng được Neustadter và Weber hoàn thiện. Lấy bối cảnh chính ở Anh Quốc, tác phẩm ghi hình tại nhiều địa điểm khác nhau trên khắp đất nước từ tháng 4 đến tháng 6 năm 2015.",
          "category": "romantic",
          "id": "5",
          "actor": "Kim Sung Kyun, Lee Kwang Soo",
          "director": "Jessica Henwick"
        },
        {
          "name": "Bố già 1",
          "time": "1h20",
          "img": "https://vcdn-giaitri.vnecdn.net/2021/04/22/bo-gia-quoc-te-jpeg-3870-1619080221.jpg",
          "note": "Sự kết hợp hoàn hảo giữa “Hài – Bi – Đời” giúp bộ phim chạm đến những cảm xúc tuyệt đẹp nhất của con người. Đó chính là tình cảm gia đình sâu sắc, thiêng liêng và cảm động đến rơi nước mắt. Đồng thời, họ còn được trải nghiệm những tràng cười thả ga mà khó bộ phim nào có thể làm được một cách tinh tế và tự nhiên như vậy.",
          "category": "comedy",
          "id": "6",
          "actor": "Trấn Thành, Thanh Vân",
          "director": "Trấn Thành, Joni Đỗ"
        },
        {
          "name": "Gái già lắm chiêu",
          "time": "2h11",
          "img": "https://www.galaxycine.vn/media/2021/2/23/gglcv-12-03-2021-online_1614052665557.jpg",
          "note": "Bộ phim xoay quanh màn đấu đá khốc liệt để tranh giành quyền lực giữa ba nữ nhân nhà họ Lý: Lý Lệ Hồng, Lý Lệ Hà và Lý Linh. Có những tràng cười sảng khoái, có tiếng cười thương hại và có cả nụ cười xen lẫn nước mắt. Bởi vậy, đây được coi là bộ phim chiếu rạp hài hước mang đậm giá trị nhân văn mà không ai có thể bỏ lỡ.",
          "category": "comedy",
          "id": "7",
          "actor": "Thái Hòa, Thu Trang, Kiều Minh Tuấn, Kaity Nguyễn, Đức Thịnh, Hứa Vĩ Văn, Hồng Ánh",
          "director": "Nguyễn Quang Dũng"
        },
        {
          "name": "Cưa lại vợ bầu",
          "time": "4h12",
          "img": "https://upload.wikimedia.org/wikipedia/vi/thumb/7/79/Cua_lai_vo_bau.jpg/270px-Cua_lai_vo_bau.jpg",
          "note": "note 8",
          "category": "comedy",
          "id": "8",
          "actor": " Trấn Thành, Ninh Dương Lan Ngọc, Bùi Anh Tú, NSƯT Hữu Châu, Mạc Văn Khoa, Khả Như",
          "director": "Nhất Trung"
        },
        {
          "name": "Hồn Papa da con gái",
          "time": "3h10",
          "img": "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/201812/10069_103_100002.jpg",
          "note": "sự không hiểu nhau khiến hai người quay cuồng trong hình thể mới của mình. Khoảng cách đó bắt đầu từ khi người vợ, người mẹ mất. Hải biến thành kẻ tùy hứng, sống không có mục tiêu và suốt ngày đắm chìm trong game. Châu phải tự học cách lo cho bản thân và cả gia đình",
          "category": "comedy",
          "id": "9",
          "actor": "Thái Hòa, Kaity Nguyễn, Hồng Vân, Thành Lộc, Chí Tài, Kathy Uyên, Vân Trang, Trang Hý",
          "director": "Ochiai Ken"
        },
        {
          "name": "Doraemon luôn bên bạn",
          "time": "1h30",
          "img": "http://starlight.vn/Areas/Admin/Content/Fileuploads/images/POSTER/doraemon.jpg",
          "note": " Một ngày nọ, Nobita vô tình tìm thấy chú gấu bông cũ, món đồ chơi chất chứa bao kỉ niệm cùng người bà đáng kính. Với khát khao “muốn gặp bà lần nữa”, Nobita đã trở về quá khứ bằng cổ máy thời gian, bất chấp sự phản đối của Doraemon. Dù ngạc nhiên, ",
          "category": "cartoon",
          "id": "10",
          "actor": "Wasabi Mizuta, Megumi Oohara, Yumi Kakazu, Subaru Kimura, Tomokazu Seki",
          "director": "Ryuichi Yagi, Takashi Yamazaki"
        },
        {
          "name": "Call me by your name",
          "time": "1h56",
          "img": "https://upload.wikimedia.org/wikipedia/vi/f/f8/CallMeByYourName2017.jpg",
          "note": "biến đây trở thành tác phẩm điện ảnh đầu tiên do cô đạo diễn chính. Sharrock cùng Moyes dành nhiều tháng viết kịch bản trước khi bản nháp cuối cùng được Neustadter và Weber hoàn thiện. Lấy bối cảnh chính ở Anh Quốc, tác phẩm ghi hình tại nhiều địa điểm khác nhau trên khắp đất nước từ tháng 4 đến tháng 6 năm 2015.",
          "category": "romantic",
          "id": "11",
          "actor": " Timothée Chalamet, and Oliver",
          "director": "Thea Sharrock"
        },
        {
          "name": "La la Land – Những Kẻ Mộng Mơ",
          "time": "2h06",
          "img": "https://upload.wikimedia.org/wikipedia/vi/a/ab/La_La_Land_%28film%29.png",
          "note": "Cả hai tình cờ gặp nhau tại thành phố Los Angeles đầy nên thơ và mộng mơ, họ là những con người có chung sự đồng điệu trong tâm hồn âm nhạc và những bản tình ca. Cảnh phim kinh diển khi họ cùng nhảy múa",
          "category": "romantic",
          "id": "12",
          "actor": "Ryan Gosling and Emma Stone",
          "director": "Damien Chazelle"
        },
        {
          "name": "Nhóc Trùm nối nghiệp gia đình",
          "time": "1h10",
          "img": "http://starlight.vn/Areas/Admin/Content/Fileuploads/images/POSTER/nhoc-trum-2.jpg",
          "note": " Nhóc trùm Ted giờ đây đã trở thành một triệu phú nổi tiếng trong khi Tim lại có một cuộc sống đơn giản bên vợ anh Carol và hai cô con gái nhỏ yêu dấu. Mỗi mùa Giáng sinh tới, cả Tina và Tabitha đều mong được gặp chú Ted nhưng dường như hai anh em nhà.",
          "category": "cartoon",
          "id": "13",
          "actor": " Amy Sedaris, Jeff Goldblum, James Marsden",
          "director": "Tom McGrath"
        },
        {
          "name": "Ratatouille (2007) - Chú Chuột Đầu Bếp",
          "time": "1h13",
          "img": "https://4.bp.blogspot.com/-BQThiCOucAo/VsWrZVDzc8I/AAAAAAAAEYI/Nr0mJST3lFw/s1600/affiche-ratatouille-06.jpg",
          "note": " Tạo hoá đã trớ trêu khi sinh là Remy có niềm yêu thích ẩm thực nhưng lại trong hình hài chú chuột đang có mong muốn đến Paris để trở thành đầu bếp nổi tiếng. Tuy bị gia đình, dòng họ chuột ngăn cản nhưng Remy vẫn quyết tâm đặt chân đến kinh đô ánh sáng ",
          "category": "cartoon",
          "id": "14",
          "actor": "Jan Pinkava; Jim Capobianco; Brad Bird",
          "director": "Brad Bird"
        },
        {
          "name": "aaaaaaaa",
          "time": "1h20",
          "img": "https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/13/812416/Lee-Dong-Wook-1.jpg",
          "note": "đẹp trai",
          "category": "none",
          "actor": "bb",
          "director": "1111111",
          "id": "15"
        },
        {
          "name": "abcd nè",
          "time": "323123",
          "img": "https://shaolin.cn.com/tu-chien-truong-thanh-dien-vien/imager_1_364354_700.jpg",
          "note": "fsdfsadffffffffffffffff",
          "category": "comedy",
          "actor": "3123123",
          "director": "ababasbsfgs",
          "id": "16"
        }
      ]
      return data;

}
export default ReduceData;
