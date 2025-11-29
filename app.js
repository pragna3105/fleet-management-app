(function(){
    if(!
        localStorage.getItem('fleet_logged_in')
    )){
        if(location.pathname.includes('admin.html'))
        location.href='index.html';
    }
    const
    cardsContainer=document.getElementById('cardsContainer');
    const
    fleetForm=document.getElementById('fleetForm');
    const
    regNoInput=document.getElementById('regNo');
    const
    categoryInput=document.getElementById('category');
    const
    driverInput=document.getElementById('driverName');
    const
    availabilityInput=document.getElementById('avilability');
    const
    imgUrlInput=document.getElementById('imgUrl');
    const
    resetFormBtn=document.getElementById('resetForm');
    const
    filterCategory=document.getElementById('filterCategory');
    const
    filterAvailability=document.getElementById('filterAvailability');
    const
    clearFiltersBtn=document.getElementById('clearfilter');
    const
    logoutBtn=document.getElementById('logoutBtn');
    const
    STORAGE_KEY='fleets_data_v1';
    const sampleFleet=[
        {id:id(),regNo:'MH12AB1234',category:'car',driver:'Ramesh',availability:'available',img:''},
        {id:id(),regNo:'DL&CXY9876',category:'truck',driver:'suresh',availability:'unavailable',img:''},
        {id:id(),regNo:'KA05AA1111',category:'auto',driver:'kumar',availability:'available',img:''},
    ];
    function id(){return
        Math.random().toString(36).slice(2,10);}
        function load(){
            const
            raw=localStorage.getItem(STORAGE_KEY);
            if(!raw)
                
        }
    }



