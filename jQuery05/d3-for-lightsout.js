var svg = null;
var signal = [{
    'width': 50,
    'height': 50,
}];

function createSVG() {
    svg = d3.selectAll('td')
        .append('svg')
        .attr('width', 50)
        .attr('height', 50);
}

function drawCircles() {
    svg.selectAll('.node')
        .data(signal)
        .enter()
        .append('rect')
        .attr('class', 'node')
        .attr('width', function(d) {
            return d.width;
        })
        .attr('height', function(d) {
            return d.height;
        })
        .style('fill', function(d) {
            if($(this).parent('svg').siblings('input').prop('checked')){
                return 'red';
            }else{
                return 'blue';
            }
        });
}

window.onload = function() {
    createSVG();
    drawCircles();
}

function colorUpdate() {
    svg.selectAll('.node')
        .data(signal)
        .style('fill', function(d) {
            if($(this).parent('svg').siblings('input').prop('checked')){
                return 'red';
            }else{
                return 'blue';
            }
        });
}