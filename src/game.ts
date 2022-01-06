
class AladdinDAO extends Entity {
    
    

    constructor() {
        
        super();
        engine.addEntity(this);

        let building = new Entity();
        building.setParent( this );
        building.addComponent( new Transform({
            position: new Vector3(0,0,0),
            scale: new Vector3(0.999 ,1 , 0.999)
        }))
        building.addComponent( new GLTFShape("models/building.glb"));
        
        this.display_nfts();
        this.create_screen();
        this.create_social_media_clickable();

    }




    //--------------
    public nftlist_col_1 = [
        
        ["Mr Masa",        126 ],
        ["Miss Bitcoin",    124],
        ["Vincent Zhou",   82],
        ["Victor Zhang", 62],
        ["Tushar Jain",  29],
        ["Tarun Chitra", 27],
        ["SBF", 61],
        ["Ruby", 80],
        ["Ran",  79],
        ["Niraj Pant", 28],
        ["Liu Jie",  78],
        ["Kain Warwick", 40],
        ["", 0 ],
        ["Jon",   77],
        ["Hart Lambur",  31],
        ["Forgiven", 75],
        ["Feng Liu",  43],
        ["Eraser",   72],
        ["Defi Dad",  70],
        ["DC",  68],
        ["Dai Dai", 67],
        ["Chao", 65],
        ["Brian Lee", 41],
        ["Ashwin Ramachandran",   26],
        ["0xMinion",      35]
    ];

    public nftlist_col_3 = [
        ["Jamie",  89],
        ["Qiao Wang",    38],
        ["Vincent Niu",  83],
        ["Vfat.tools",  25],
        ["Tekin Salimi",  39],
        ["Sharlyn",  88],
        ["Ryan Kim",   81],
        ["Robert Leshner", 36],
        ["Olaf Carlson Wee",  34],
        ["Lu Yao Yuan", 33],
        ["Kyle Samani", 30],
        ["",0],
        ["Jordan Momtazi", 24],
        ["Imran Khan", 86],
        ["Guo Yu",   76],
        ["Discusfish",  84],
        ["FC", 73],
        ["Del Wang",  71],
        ["DCG", 69],
        ["Daniel Wang", 63],
        ["CMS",  66],
        ["Cao Yin", 85],
        ["Bowen",  64],
        ["Alex Pack",  42],
    ];
    public nft_address = "0x000000000437b3cce2530936156388bff5578fc3";


    display_nfts() {

        let nft;

        let shared_material = new Material();
        shared_material.albedoTexture = new Texture("images/framepattern.png");
        shared_material.transparencyMode = 1;
        shared_material.emissiveColor = Color3.White();
        shared_material.emissiveIntensity = 10.0;
        
        let shared_planeshape = new PlaneShape();




        for ( let i = this.nftlist_col_1.length - 1 ; i >= 0 ; i-- ) {
        
            let z = 15.5 + ( this.nftlist_col_1.length - 1 - i ) * 2.7;

            let nft_name = this.nftlist_col_1[i][0]; 
            let nft_id   = this.nftlist_col_1[i][1];

            if ( nft_name != "" ) {
                
                
                nft = new Entity()
                nft.setParent( this );
                nft.addComponent( new Transform({
                    position: new Vector3( 13.22, 17, z ),
                    scale: new Vector3( 4.9 , 4.9 , 1)
                }))
                nft.addComponent(new NFTShape("ethereum://" + this.nft_address +  "/" + nft_id ) )
                nft.getComponent( Transform ).rotation.eulerAngles = new Vector3( -90 , 0 , 0) 
                nft.addComponent( new OnPointerDown(
                    (e)=>{
                        openNFTDialog("ethereum://" + this.nft_address +"/" + nft_id );

                    },{
                        distance: 20
                    }
                )) ;



                let name_platform = new Entity();
                name_platform.setParent( this );
                name_platform.addComponent( new Transform({
                    position: new Vector3(13.22 , 8.61 , z + 0.08),
                    scale: new Vector3( 2.5 , 2.5 ,1)
                })) 
                name_platform.getComponent( Transform).rotation.eulerAngles = new Vector3( -90 , 0 , 0 );
                name_platform.addComponent( shared_planeshape );
                name_platform.addComponent( shared_material );


                let name_label = new Entity();
                name_label.setParent( this );
                name_label.addComponent( new Transform({
                    position: new Vector3( 13.22, 8.61, z - 0.38),
                    scale: new Vector3( 0.18, 0.18, 0.18 )
                }))
                name_label.getComponent( Transform ).rotation.eulerAngles = new Vector3( 90 ,  0 , 0 );
                name_label.addComponent( new TextShape( nft_name.toString() ) );

            }
        
        }


        for ( let i = this.nftlist_col_3.length - 1 ; i >= 0 ; i-- ) {
        
            let z = 15.5 + ( this.nftlist_col_3.length - 1 - i ) * 2.7;

            let nft_name = this.nftlist_col_3[i][0]; 
            let nft_id   = this.nftlist_col_3[i][1];
            

            if ( nft_name != "" ) {
                nft = new Entity()
                nft.setParent( this );
                nft.addComponent( new Transform({
                    position: new Vector3( 18.62, 17, z ),
                    scale: new Vector3( 4.9 , 4.9 , 1)
                }))
                nft.addComponent(new NFTShape("ethereum://" + this.nft_address +  "/" + nft_id ) )
                nft.getComponent( Transform ).rotation.eulerAngles = new Vector3( -90 , 0 , 0) 
                nft.addComponent( new OnPointerDown(
                    (e)=>{
                        openNFTDialog("ethereum://" + this.nft_address + "/" + nft_id );

                    },{
                        distance: 20
                    }
                )) ;

                let name_platform = new Entity();
                name_platform.setParent( this );
                name_platform.addComponent( new Transform({
                    position: new Vector3( 18.62 , 8.61 , z + 0.08),
                    scale: new Vector3( 2.5 , 2.5 ,1)
                })) 
                name_platform.getComponent( Transform).rotation.eulerAngles = new Vector3( -90 , 0 , 0 );
                name_platform.addComponent( shared_planeshape );
                name_platform.addComponent( shared_material );


                let name_label = new Entity();
                name_label.setParent( this );
                name_label.addComponent( new Transform({
                    position: new Vector3( 18.62, 8.61, z - 0.38),
                    scale: new Vector3( 0.18, 0.18, 0.18 )
                }))
                name_label.getComponent( Transform ).rotation.eulerAngles = new Vector3( 90 ,  0 , 0 );
                name_label.addComponent( new TextShape( nft_name.toString() ) );
            }
        
        }


        
    }

    //---
    create_screen() {

        let shared_material = new Material();
        shared_material.albedoTexture = new Texture("images/framepattern2.png");
        shared_material.transparencyMode = 1;
        shared_material.emissiveColor = Color3.White();
        shared_material.emissiveIntensity = 10.0;


        let screenframe = new Entity();
        screenframe.setParent( this );
        screenframe.addComponent( new Transform({
            position: new Vector3( 16 , 12 , 80.8),
            scale: new Vector3(7.3 , 4.42 , 1)
        }))
        screenframe.addComponent( new PlaneShape() );
        screenframe.getComponent( Transform ).rotation.eulerAngles = new Vector3( 0 , 0 , 0 );  
        screenframe.addComponent( shared_material );
        screenframe.getComponent( PlaneShape ).isPointerBlocker = false;
        screenframe.getComponent( PlaneShape ).withCollisions = false;

        



        let myVideoTexture = new VideoTexture(new VideoClip("videos/AladdinDaoIntro.mp4"));
        let myMaterial = new Material()
        myMaterial.albedoTexture = myVideoTexture
        myMaterial.roughness = 1
        myMaterial.specularIntensity = 0
        myMaterial.metallic = 0
        
        let screen = new Entity();
        screen.setParent( this );
        screen.addComponent( new Transform({
            position: new Vector3( 16 , 12 , 80.8),
            scale: new Vector3(7 , 4.1 , 1)
        }))
        screen.addComponent( new PlaneShape() );
        screen.getComponent( PlaneShape).uvs = [
            
            0,1,
            1,1,
            1,0,
            0,0,
            
            1,1,
            0,1,
            0,0,
            1,0
            
        ];


        screen.getComponent( Transform ).rotation.eulerAngles = new Vector3( 0 , 0 , 0 );  
        screen.addComponent(myMaterial)
        screen.addComponent(new OnPointerDown(
            (e) => {
                myVideoTexture.playing = !myVideoTexture.playing
            }, {
                hoverText:"Play/Pause Video",
                distance: 20
            }
        ));
        myVideoTexture.playing = true;

        

    }

    //----
    public social_media_clickables = [
        ["Twitter","https://twitter.com/AladdinDao"],
        ["Discord","https://discord.com/invite/Ymwar7c6V8"],
        ["Aladdin","https://aladdin.club"],
        ["Telegram","https://t.me/aladdin_dao"],
        ["Github","https://github.com/AladdinDAO"],
        ["Medium", "https://medium.com/aladdindao"]
    ]

    create_social_media_clickable() {

        let shared_box_shape = new BoxShape();
        let shared_material = new Material();
        shared_material.albedoColor = Color4.FromInts(0,0,0,0);

        for ( let i = 0 ; i < this.social_media_clickables.length ; i++) {

            let social_media_name = this.social_media_clickables[i][0];
            let social_media_link = this.social_media_clickables[i][1]; 

            let button = new Entity();
            button.setParent( this );
            button.addComponent( new Transform({
                position: new Vector3(14.84 + 0.46 * i , 9.96 , 47.88),
                scale: new Vector3( 0.32 , 0.32  , 0.06)
            }))
            button.addComponent( shared_box_shape )
            button.addComponent( new OnPointerDown(
                (e)=> {
                    openExternalURL( social_media_link );
                } , {
                    hoverText: social_media_name
                }
            ) );
            button.addComponent( shared_material );

        }   

        
    }
}

new AladdinDAO();

