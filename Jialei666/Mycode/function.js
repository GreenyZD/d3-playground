function test(selection) {
selection.append('div').html('����һ������').style('color','red');
}
test(d3.select('body').html('�����������').style('color','blue'));