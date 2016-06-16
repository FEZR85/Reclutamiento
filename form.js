Ext.require([
    'Ext.Editor',
    'Ext.form.Panel',
    'Ext.form.field.Radio'
]);

Ext.onReady(function(){
    var msg = function(title, msg){
        Ext.Msg.show({
            title: title,
            msg: msg,
            minWidth: 200,
            modal: true,
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        })
    }

    var panel = Ext.create('Ext.form.Panel',{
        renderTo: 'container',
        width: 700,
        height: 400,
        title: 'Agregar Producto',
        bodyPadding: 100,
        modal: true,
        defaults: {
            allowBlank:false,
            msgTarget: 'side',
            labelWidth: 100
        },
        items: [{
    		xtype: 'form',
    		title: 'My Form',
            name: 'register',
    		id: 'register',
    		items: [{
                xtype: 'textfield',
                fieldLabel: 'Nombre',
                regex: /^[ a-zA-Z ]+$/,
                regexText: 'Sólo letras de la a-z o A-Z',
                name: 'nombre'
            }, {
                xtype: 'numberfield',
                fieldLabel: 'Código',
                regex: /^[ 0-9 ]+$/,
                regexText: 'Sólo digitos del 0-9',
                name: 'codigo'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Tipo de producto',
                columns: 2,
                vertical: true,
                items: [
                    { boxLabel: 'Menudeo', name: 'tipo', inputValue: '1', checked: true },
                    { boxLabel: 'Mayoreo', name: 'tipo', inputValue: '2'}
                ]
            }, {
    			xtype: 'button',
    			text: 'Guardar',
    			scope: this,
    			handler: function (b, e) {
    				var formulario = b.up('form').getForm();//Ext.getCmp('register');
    				formulario.submit({
    					url: 'guardarProducto.php',
    					method: 'POST',
    					success: function (frm, res)  {
    						msg('OK','Producto registrado');
    					},
    					failure: function (frm, res) {
    						msg('ERROR','No se envio el formulario');
    					}
    				});
                }
    		}]
        }]
    });
    panel.show();

});
/*
var myForm = new Ext.Panel({
	layout: 'card',
	dockedItems: [{
		xtype: 'toolbar',
		docked: 'top',
		title: 'Test Form'
	}],
	items: [{
		xtype: 'form',
		title: 'My Form',
		id: 'register',
		items: [{
            xtype: 'textfield',
            fieldLabel: 'Nombre',
            regex: /^[ a-zA-Z ]+$/,
            name: 'nombre'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Código',
            name: 'codigo'
        }, {
            xtype: 'radiogroup',
            fieldLabel: 'Tipo de producto',
            // Arrange radio buttons into two columns, distributed vertically
            columns: 2,
            vertical: true,
            items: [
                { boxLabel: 'Menudeo', name: 'tipo', inputValue: '1', checked: true },
                { boxLabel: 'Mayoreo', name: 'tipo', inputValue: '2'}
            ]
        }, {
			xtype: 'button',
			text: 'register',
			scope: this,
			handler: function (b, e) {
				var form = Ext.getCmp('register');
				form.submit({
					url: 'control/guardarProducto.php',
					method: 'POST',
					success: function (frm, res)  {
						alert('Form submitted: ' + res.customfield);
					},
					failure: function (frm, res) {
						alert('Form no submit!');
					}
				});
			}
        }]
    }]}
);*/
