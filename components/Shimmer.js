const Shimmer = () => {

    var shimmerlist = [];
    for(let i = 0; i<6; i++){
        shimmerlist.push(<li></li>);
    }
    return (
        <>
            <div className="shimmer-container">
                <ul>
                    {shimmerlist}
                </ul>
            </div>
        </>
    )
}

export default Shimmer
