<form action="" name="form" ng-if="authenticated" ng-controller = "form-controller">

  <div class="l-title -externalIndent_none">
    <h2 class="b-title">Примеры работ</h2>
  </div>
  <div class="l-control -externalIndent_none">
    <div class="b-controlColumn">
      <div class="b-control -type_even" ng-class=" unfilled_name == true ? '-type_error' : '' ">
        <label for="name" class="b-control__title">Название</label>
        <input type="text" id="name" class="b-control__field " ng-model="permObj.ng_name">
      </div>
      <div class="b-control -type_odd" ng-class=" unfilled_type === true ? '-type_error' : '' ">
        <label for="type" class="b-control__title">Тип</label>
        <select id="type" class="b-control__select" ng-model="permObj.ng_type" ng-options="type for type in types"></select> <!--  -->
      </div>
      <div class="b-control -type_even" ng-class=" unfilled_link == true ? '-type_error' : '' ">
        <label for="link" class="b-control__title">Ссылка</label>
        <input type="text" id="link" class="b-control__field" ng-model="permObj.ng_link" >
      </div>
      <div class="b-control -type_odd" ng-class="">
        <label for="description" class="b-control__title">Краткое описание</label>
        <input type="text" id="descrShort" class="b-control__field" ng-model="permObj.ng_descrShort" >
      </div>
    </div> 
    <div class="b-controlColumn">
      <div class="b-control -type_odd" ng-class="">
        <label for="description" class="b-control__title">Подробное описание</label>
        <textarea id="descrLong" class="b-control__field -type_textarea" ng-model="npermObj.g_descrLong" ></textarea>
      </div>
    </div>
  </div>

  <div class="b-errors">{{errortext}}</div>

  <div class="l-button -align_center">
    <a href="" class="b-button" ng-click="addItem()"><span class="b-icon -color_white"><i class="fa fa-plus-circle"></i></span> <span class="b-button__text">Добавить</span></a>
  </div>

  <div class="l-table">
    <div class="l-control -externalIndent_none">
      <div class="b-control -type_search -type_even">
        <div class="-search_all" ng-show="visibleAll">
          <label for="search" class="b-control__title">Поиск</label>
          <input type="search" id="search" class="b-control__field" ng-model="ng_search.$"> <!-- permObj. -->
        </div>

        <div class="-search_name" ng-show="!visibleAll">
          <label for="searchName" class="b-control__title">Поиск по имени</label>
          <input type="search" id="searchName" class="b-control__field" ng-model="ng_search.name"> <!-- permObj. -->
        </div>
      </div>
      <div class="b-control -type_changeSearch -type_odd">
        <span class="b-searchControl" ng-click="changeSearch()" title="{{searchTitle}}"><span class="b-icon -fSize_14"><i class="fa fa-search" aria-hidden="true"></i></span> <span class="b-searchControl__text">{{searchText}}</span></span>
      </div>
    </div>

    <table class="b-table">
      <thead>
        <tr>
          <th>
            <div class="b-table__columnName" ng-click="sortBy('name')">Название
              <span class="b-icon -type_sortorder" ng-show="propertyName === 'name'" ng-class="reverse == true ? '-order_reverse' : ''">
                <i class="fa fa-sort-asc" aria-hidden="true"></i>
                <i class="fa fa-sort-desc" aria-hidden="true"></i>
              </span>
            </div>
          </th>
          <th>
            <div class="b-table__columnName" ng-click="sortBy('type')">Тип
              <span class="b-icon -type_sortorder" ng-show="propertyName === 'type'" ng-class="reverse == true ? '-order_reverse' : ''">
                <i class="fa fa-sort-asc" aria-hidden="true"></i>
                <i class="fa fa-sort-desc" aria-hidden="true"></i>
              </span>
            </div>
          </th>
          <th>
            <div class="b-table__columnName" ng-click="sortBy('link')">Ссылка
              <span class="b-icon -type_sortorder" ng-show="propertyName === 'link'" ng-class="reverse == true ? '-order_reverse' : ''">
                <i class="fa fa-sort-asc" aria-hidden="true"></i>
                <i class="fa fa-sort-desc" aria-hidden="true"></i>
              </span>
            </div>
          </th>
          <th class="-type_description">
            <div class="b-table__columnName">Описание</div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="example in examples  | orderBy:propertyName:reverse | filter:ng_search"  ng-class-odd="'-type_odd'" ng-class-even="'-type_even'" > 
          <td ng-bind="example.name"></td>
          <td ng-bind="example.type"></td>
          <td><a ng-bind="example.link" ng-href="{{example.link}}" class="b-link"></a></td>
          <td ng-bind-template="{{example.descrShort}} {{example.descrLong}}!" class="-type_description"></td>
          <td class="-type_icon"><span class="b-icon -type_fixed" ng-click="removeItem($index)"><span class="b-icon__index"></span><i class="fa fa-close"></i></span></td> <!-- {{$index}} -->
        </tr>
      </tbody>
    </table>
  </div>
</form>
